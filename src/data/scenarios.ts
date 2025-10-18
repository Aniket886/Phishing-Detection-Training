export type EmailScenario = {
  id: number;
  sender: string;
  subject: string;
  body: string;
  isPhishing: boolean;
  explanation: string;
};

export const scenarios: EmailScenario[] = [
  // Simple Inquiries (4 scenarios)
  {
    id: 1,
    sender: "Reception <reception@company.com>",
    subject: "Visitor parking validation",
    body:
      "Your visitor John Smith needs parking validation for today's meeting. Please confirm the meeting time.",
    isPhishing: false,
    explanation:
      "Legitimate internal communication from reception with a reasonable request for meeting confirmation.",
  },
  {
    id: 2,
    sender: "Customer Service <support@quickdelivery.com>",
    subject: "Package delivery confirmation needed",
    body:
      "Your package #QD789123 is ready for delivery. Please confirm your availability for tomorrow between 9-5 PM.",
    isPhishing: false,
    explanation:
      "Standard delivery notification with tracking number and reasonable delivery window request.",
  },
  {
    id: 3,
    sender: "Banking Alert <alerts@securebank-notify.com>",
    subject: "Account balance low",
    body:
      "Your checking account balance is below $50. Log in to your account to view details and transfer funds.",
    isPhishing: true,
    explanation:
      "Suspicious domain mimicking a bank. Real banks use their official domains and don't request immediate login.",
  },
  {
    id: 4,
    sender: "Facilities <facilities@company.com>",
    subject: "Office temperature adjustment",
    body:
      "We've received reports about temperature issues on the 3rd floor. Please let us know if you're experiencing discomfort.",
    isPhishing: false,
    explanation:
      "Normal facilities communication addressing a common office issue with appropriate company domain.",
  },
  // Moderately Complex Requests (3 scenarios)
  {
    id: 5,
    sender: "Project Manager <sarah.williams@clientcorp.com>",
    subject: "Contract amendment - signature required",
    body:
      "Hi, we need to amend section 4.2 of our service agreement due to scope changes. I've attached the updated contract for your review and signature. Please return by end of week to avoid project delays.",
    isPhishing: true,
    explanation:
      "External domain requesting contract signatures with urgency. Verify through known contacts and use official contract processes.",
  },
  {
    id: 6,
    sender: "Finance <finance@company.com>",
    subject: "Q4 budget review meeting",
    body:
      "Please join the Q4 budget review meeting on Friday at 2 PM in Conference Room B. Bring your department's expense reports and projections for next quarter. Meeting agenda is attached.",
    isPhishing: false,
    explanation:
      "Legitimate internal meeting request with specific details, appropriate sender, and reasonable business context.",
  },
  {
    id: 7,
    sender: "Vendor Relations <vendor@supplychainpro.com>",
    subject: "Invoice processing system update",
    body:
      "Our invoice processing system has been updated. Please re-submit your banking details through our new secure portal to ensure continued payment processing. Access the portal using the link below.",
    isPhishing: true,
    explanation:
      "Requests for banking details via email are red flags. Legitimate vendors don't ask for financial information this way.",
  },
  // Challenging Situations (3 scenarios)
  {
    id: 8,
    sender: "Legal Department <legal@company.com>",
    subject: "Confidential: Employment verification request",
    body:
      "We've received an employment verification request for your position from Mortgage Solutions Inc. This appears to be for a home loan application. Please confirm if you authorized this request and provide your employee ID for verification.",
    isPhishing: false,
    explanation:
      "Legitimate HR/Legal communication about employment verification, which is a normal business process for loan applications.",
  },
  {
    id: 9,
    sender: "Security Team <security@company-systems.com>",
    subject: "Critical: Suspicious activity detected",
    body:
      "Our security systems detected unusual login attempts on your account from multiple international locations. Your account has been temporarily locked. Click here to verify your identity and restore access immediately to prevent permanent suspension.",
    isPhishing: true,
    explanation:
      "Impersonation with urgency and fear tactics. The domain is suspicious, and real security teams use official channels for account issues.",
  },
  {
    id: 10,
    sender: "Board Secretary <board.secretary@company.com>",
    subject: "Confidential: Board meeting minutes review",
    body:
      "As requested by the Board of Directors, please review the attached confidential meeting minutes from last week's session. Your department's budget allocation is discussed on page 3. Please confirm receipt and provide any corrections by tomorrow morning.",
    isPhishing: false,
    explanation:
      "Legitimate internal communication from board secretary with appropriate confidentiality language and reasonable timeline.",
  },
];