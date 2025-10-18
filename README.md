# 🎣 Phishing Detection Training Game

An interactive web-based training game designed to help users identify phishing emails and improve their cybersecurity awareness. Built with React, TypeScript, and Vite.

![Phishing Detection Training](https://img.shields.io/badge/Security-Training-blue)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)

## 🎯 Overview

This training game presents users with realistic email scenarios and challenges them to identify whether each email is legitimate or a phishing attempt. The game includes multiple difficulty levels, time pressure, and educational feedback to enhance learning.

## ✨ Features

### 🎮 Game Mechanics
- **10 Email Scenarios**: Carefully crafted realistic phishing and legitimate emails
- **Time Pressure**: 30-second timer per question to simulate real-world decision making
- **Lives System**: 3 lives per game - lose a life for wrong answers or timeouts
- **Scoring System**: Points awarded for correct identifications
- **Dynamic Button Layout**: Button positions randomize every 3 questions to prevent muscle memory

### 📚 Educational Elements
- **Detailed Explanations**: Learn why each email is or isn't phishing after each answer
- **Real-world Examples**: Scenarios based on common phishing techniques
- **Immediate Feedback**: Instant feedback on correct/incorrect answers

### 🎨 User Experience
- **Responsive Design**: Works on desktop and mobile devices
- **Clean Interface**: Intuitive design focused on learning
- **Progress Tracking**: Visual indicators for lives, score, and progress
- **Game Over Screen**: Comprehensive results and restart functionality

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aniket886/Phishing-Detection-Training.git
   cd Phishing-Detection-Training
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to start playing!

## 🎮 How to Play

1. **Start the Game**: Click "Start Training" on the welcome screen
2. **Read Each Email**: Carefully examine the sender, subject, and body content
3. **Make Your Decision**: Choose "THIS IS NOT PHISHING" or "THIS IS PHISHING"
4. **Learn from Feedback**: Read the explanation after each answer
5. **Continue Playing**: Progress through all 10 scenarios
6. **Review Results**: See your final score and areas for improvement

### 🎯 Scoring

- **Correct Answer**: +10 points
- **Wrong Answer**: -5 points and lose a life
- **Timeout**: Lose a life (no points deducted)
- **Game Over**: When all 3 lives are lost

## 🏗️ Project Structure

```
src/
├── App.tsx              # Main application component
├── App.css              # Application styles
├── data/
│   └── scenarios.ts     # Email scenarios and explanations
├── assets/              # Static assets
├── index.css            # Global styles
└── main.tsx            # Application entry point

public/
├── brand-fish.svg       # Application logo
└── vite.svg            # Vite logo
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Technology Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7
- **Styling**: CSS3 with modern features
- **Linting**: ESLint with React-specific rules

## 📖 Educational Content

The game includes scenarios covering common phishing techniques:

- **Domain Spoofing**: Fake domains that look similar to legitimate ones
- **Urgency Tactics**: Creating false sense of urgency to prompt quick action
- **CEO Fraud**: Impersonating executives to request unusual actions
- **Credential Harvesting**: Attempts to steal login credentials
- **Invoice Scams**: Fake billing and payment requests
- **Social Engineering**: Psychological manipulation techniques

## 🎨 Customization

### Adding New Scenarios

Edit `src/data/scenarios.ts` to add new email scenarios:

```typescript
{
  id: 11,
  sender: "sender@domain.com",
  subject: "Email Subject",
  body: "Email content...",
  isPhishing: true, // or false
  explanation: "Explanation of why this is/isn't phishing"
}
```

### Adjusting Game Settings

Modify constants in `App.tsx`:

```typescript
const TIME_LIMIT = 30;        // Seconds per question
const LIVES = 3;              // Number of lives
const SWAP_INTERVAL = 3;      // Button swap frequency
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Follow the existing code style and TypeScript conventions
2. Add appropriate comments for complex logic
3. Test your changes thoroughly
4. Update documentation as needed

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Repository**: [https://github.com/Aniket886/Phishing-Detection-Training](https://github.com/Aniket886/Phishing-Detection-Training)
- **Issues**: [Report bugs or request features](https://github.com/Aniket886/Phishing-Detection-Training/issues)

## 🙏 Acknowledgments

- Inspired by real-world cybersecurity training needs
- Built with modern web technologies for optimal performance
- Designed with accessibility and user experience in mind

---

**Stay vigilant, stay secure!** 🛡️

*This training game is designed for educational purposes to improve cybersecurity awareness and phishing detection skills.*
