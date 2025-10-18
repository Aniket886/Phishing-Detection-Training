import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { scenarios, type EmailScenario } from "./data/scenarios";

type Stage = "welcome" | "playing" | "result" | "gameOver";

const TIME_LIMIT = 30;
const LIVES = 3;

export default function App() {
  const total = scenarios.length;
  const [stage, setStage] = useState<Stage>("welcome");
  const [index, setIndex] = useState(0);
  const [lives, setLives] = useState(LIVES);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [followUpOptions, setFollowUpOptions] = useState<string[]>([]);
  const [buttonsSwapped, setButtonsSwapped] = useState<boolean>(false);

  const current: EmailScenario | undefined = useMemo(() => scenarios[index], [index]);

  useEffect(() => {
    if (stage !== "playing" || showFeedback) return;
    setTimeLeft(TIME_LIMIT);
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(id);
          setLastCorrect(false);
          setShowFeedback(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [stage, index, showFeedback]);

  useEffect(() => {
    if (stage === "playing" && timeLeft === 0 && showFeedback) {
      setLives((l) => l - 1);
    }
  }, [timeLeft, stage, showFeedback]);

  useEffect(() => {
    if (stage === "playing" && lives <= 0) {
      setStage("gameOver");
    }
  }, [lives, stage]);

  function generateFollowUpOptions(correctEmail: EmailScenario): string[] {
    const correctAnswer = correctEmail.explanation;
    const otherExplanations = scenarios
      .filter(s => s.id !== correctEmail.id && s.explanation !== correctAnswer)
      .map(s => s.explanation);
    
    const shuffledOthers = [...otherExplanations].sort(() => Math.random() - 0.5);
    const wrongAnswers = shuffledOthers.slice(0, 2);
    
    const allOptions = [correctAnswer, ...wrongAnswers];
    return allOptions.sort(() => Math.random() - 0.5);
  }

  function randomizeButtonOrder() {
    setButtonsSwapped(Math.random() < 0.5);
  }

  function handlePhishingClick() {
    if (current) {
      const options = generateFollowUpOptions(current);
      setFollowUpOptions(options);
      setShowFollowUp(true);
    }
  }

  function handleLegitimateClick() {
    classify("legit");
  }

  function handleFollowUpAnswer(selectedAnswer: string) {
    if (!current) return;
    const correct = selectedAnswer === current.explanation;
    setLastCorrect(correct);
    setShowFeedback(true);
    if (correct) setScore((s) => s + 1);
    else setLives((l) => l - 1);
  }

  function startGame() {
    setStage("playing");
    setIndex(0);
    setLives(LIVES);
    setScore(0);
    setTimeLeft(TIME_LIMIT);
    setShowFeedback(false);
    setLastCorrect(null);
    setSelectedOption("");
    setShowFollowUp(false);
    setFollowUpOptions([]);
    randomizeButtonOrder();
  }

  function classify(choice: "phish" | "legit") {
    if (!current) return;
    const correct = current.isPhishing ? choice === "phish" : choice === "legit";
    setLastCorrect(correct);
    setShowFeedback(true);
    if (correct) setScore((s) => s + 1);
    else setLives((l) => l - 1);
  }

  function next() {
    if (lives <= 0) {
      setStage("gameOver");
      return;
    }
    if (index + 1 >= total) {
      setStage("result");
      return;
    }
    setIndex((i) => i + 1);
    setShowFeedback(false);
    setLastCorrect(null);
    setTimeLeft(TIME_LIMIT);
    setSelectedOption("");
    setShowFollowUp(false);
    setFollowUpOptions([]);
    randomizeButtonOrder();
  }

  function reset() {
    setStage("welcome");
    setIndex(0);
    setLives(LIVES);
    setScore(0);
    setTimeLeft(TIME_LIMIT);
    setShowFeedback(false);
    setLastCorrect(null);
    setSelectedOption("");
    setShowFollowUp(false);
    setFollowUpOptions([]);
    setButtonsSwapped(false);
  }

  const hearts = Array.from({ length: LIVES }, (_, i) => (i < lives ? "❤️" : "🤍"));

  return (
    <div className="app">
      <div className="shell">
        <div className="hero">
          <div className="hero-inner">
            <img src="/brand-fish.svg" alt="TryPhishMe" className="logo-image" />
            <div className="brand">
              <div className="brand-title">TryPhishMe</div>
              <div className="brand-sub">Phishing Detection Training</div>
            </div>
          </div>
        </div>

        {stage === "welcome" && <Welcome total={total} onStart={startGame} />}

        {stage === "playing" && current && (
          <div className="game-screen">
            <div className="game-header">
              <h1 className="level-title">Level {index + 1} of {total}</h1>
              <div className="game-stats">
                <div className="stat-box time-remaining">
                  <div className="stat-label">TIME REMAINING:</div>
                  <div className="stat-value">{timeLeft}</div>
                </div>
                <div className="stat-box lives-remaining">
                  <div className="stat-label">LIVES:</div>
                  <div className="hearts">
                    {hearts.map((heart, i) => (
                      <span key={i} className="heart">{heart}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="email-card">
              <div className="email-header">
                <div className="sender-avatar">
                  <span className="avatar-text">RE</span>
                </div>
                <div className="email-meta">
                  <div className="email-field">
                    <span className="field-label">From:</span> {current.sender}
                  </div>
                  <div className="email-field">
                    <span className="field-label">To:</span> you@company.com
                  </div>
                  <div className="email-field">
                    <span className="field-label">Subject:</span> {current.subject}
                  </div>
                </div>
              </div>
              <div className="email-body">
                {current.body}
              </div>
            </div>
            
            {!showFeedback && !showFollowUp && (
              <div className="action-buttons">
                {buttonsSwapped ? (
                  <>
                    <button className="btn-is-phishing" onClick={handlePhishingClick}>
                      THIS IS PHISHING
                    </button>
                    <button className="btn-not-phishing" onClick={handleLegitimateClick}>
                      THIS IS NOT PHISHING
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn-not-phishing" onClick={handleLegitimateClick}>
                      THIS IS NOT PHISHING
                    </button>
                    <button className="btn-is-phishing" onClick={handlePhishingClick}>
                      THIS IS PHISHING
                    </button>
                  </>
                )}
              </div>
            )}

            {showFollowUp && !showFeedback && (
              <div className="follow-up-section">
                <div className="follow-up-question">
                  Why is this phishing? Select the single correct reason:
                </div>
                <div className="follow-up-options">
                  {followUpOptions.map((option, index) => (
                    <button
                      key={index}
                      className="follow-up-option"
                      onClick={() => handleFollowUpAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {showFeedback && (
              <Feedback
                email={current}
                correct={lastCorrect === true}
                timedOut={timeLeft === 0}
                onNext={next}
                isLast={index + 1 >= total || lives <= 0}
                lives={lives}
              />
            )}
          </div>
        )}

        {stage === "result" && (
          <Result score={score} total={total} onRestart={reset} lives={lives} />
        )}

        {stage === "gameOver" && (
          <GameOver onRestart={reset} />
        )}
      </div>
    </div>
  );
}

function GameOver({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="game-over-screen">
      <div className="game-over-container">
        <h1 className="game-over-title">💀 Game Over 💀</h1>
        <p className="game-over-message">You ran out of lives! Better luck next time.</p>
        <p className="game-over-advice">Try to be more careful and identify phishing emails correctly.</p>
        <button className="btn-play-again" onClick={onRestart}>🔄 Play Again</button>
      </div>
    </div>
  );
}

function Welcome({ total, onStart }: { total: number; onStart: () => void }) {
  return (
    <div className="welcome">
      <h1 className="center">Welcome to TryPhishMe Training</h1>
      <p className="subtitle center">Enhance your cybersecurity awareness by learning to identify phishing emails. This interactive training will help you develop the skills needed to protect yourself and your organization from email-based threats.</p>

      <div className="obj-card accent-left">
        <h2>Training Objectives</h2>
        <ul>
          <li>Identify common phishing email characteristics</li>
          <li>Recognize social engineering tactics</li>
          <li>Develop critical thinking skills for email analysis</li>
          <li>Practice real-world phishing detection scenarios</li>
        </ul>
      </div>

      <div className="stats">
        <div className="stat-card">
          <div className="stat-title">⏱ Time Limit</div>
          <div className="stat-sub">30 seconds per email</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">❤️ Lives</div>
          <div className="stat-sub">3 attempts to succeed</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">📧 Scenarios</div>
          <div className="stat-sub">{total} realistic email examples</div>
        </div>
      </div>

      <div className="center">
        <button className="btn cta" onClick={onStart}>BEGIN TRAINING</button>
      </div>
    </div>
  );
}

function EmailCard({ email }: { email: EmailScenario }) {
  return (
    <div className="email-card">
      <div className="email-header">
        <div><span className="label">From:</span> {email.sender}</div>
        <div><span className="label">Subject:</span> {email.subject}</div>
      </div>
      <div className="email-body">{email.body}</div>
    </div>
  );
}

function Feedback({
  email,
  correct,
  timedOut,
  isLast,
  onNext,
  lives,
}: {
  email: EmailScenario;
  correct: boolean;
  timedOut: boolean;
  isLast: boolean;
  onNext: () => void;
  lives: number;
}) {
  const getTitle = () => {
    if (timedOut) return "Time's up!";
    return correct ? "Correct!" : "Incorrect";
  };

  const getMessage = () => {
    if (timedOut) return "Time ran out. Try to be faster next time!";
    if (correct) return "Reason identified.";
    return `Wrong answer! You lost a life. ${lives} lives remaining. Try again.`;
  };

  return (
    <div className="feedback-overlay">
      <div className="feedback-modal">
        <button className="feedback-close" onClick={onNext}>×</button>
        <h2 className="feedback-title">{getTitle()}</h2>
        <p className="feedback-message">{getMessage()}</p>
        <button className="feedback-ok-btn" onClick={onNext}>OK</button>
      </div>
    </div>
  );
}

function Result({ score, total, onRestart, lives }: { score: number; total: number; onRestart: () => void; lives: number }) {
  const totalTime = "3m 19s"; // This should be calculated, but for now using example time
  
  return (
    <div className="result-screen">
      <div className="result-container">
        <h1 className="result-title">🎉 Congratulations! 🎉</h1>
        <p className="result-subtitle">You completed the game successfully!</p>
        
        <div className="result-stats">
          <div className="result-stat">
            <span className="stat-label">Your flag:</span>
            <span className="stat-value flag-value">THM{_phish_you_not}</span>
          </div>
          <div className="result-stat">
             <span className="stat-label">Lives remaining:</span>
             <span className="stat-value">{lives}</span>
           </div>
          <div className="result-stat">
            <span className="stat-label">Total time:</span>
            <span className="stat-value">{totalTime}</span>
          </div>
        </div>
        
        <button className="btn-play-again" onClick={onRestart}>🔄 Play Again</button>
      </div>
    </div>
  );
}
