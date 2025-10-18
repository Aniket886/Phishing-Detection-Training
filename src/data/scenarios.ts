export type EmailScenario = {
  id: number;
  sender: string;
  subject: string;
  body: string;
  isPhishing: boolean;
  explanation: string;
};

export const scenarios: EmailScenario[] = [
  {
    id: 1,
    sender: "IT Support <it-support@company-security.com>",
    subject: "Password Expiration Notice",
    body:
      "Your password will expire in 24 hours. To avoid losing access, please reset it immediately using the secure portal.",
    isPhishing: true,
    explanation:
      "Spoofed domain and urgent language. Real notices use official company domain and scheduled reminders.",
  },
  {
    id: 2,
    sender: "Accounts <accounts@vendors-billing.com>",
    subject: "Invoice Overdue - Action Required",
    body:
      "We attempted to process payment for invoice #98411. Download the invoice and pay now to avoid service suspension.",
    isPhishing: true,
    explanation:
      "Unknown vendor, pressure tactics, and download/pay links. Verify vendors via known channels.",
  },
  {
    id: 3,
    sender: "CEO <ceo@company-mail.com>",
    subject: "Quick favor",
    body:
      "Are you at your desk? I need you to purchase 10 gift cards now and send the codes here. It’s urgent.",
    isPhishing: true,
    explanation:
      "Classic CEO fraud. Unusual request, urgency, and gift cards. Confirm via official channels.",
  },
  {
    id: 4,
    sender: "Microsoft 365 <security@microsoft-notice.com>",
    subject: "Unusual sign-in activity",
    body:
      "We detected a sign-in from a new location. Verify your identity to keep your account secure.",
    isPhishing: true,
    explanation:
      "Impersonation and non-Microsoft domain. Use your normal sign-in path or official security portal.",
  },
  {
    id: 5,
    sender: "HR <hr@company.com>",
    subject: "Updated Remote Work Policy",
    body:
      "Please review the updated remote work policy on the intranet and acknowledge by Friday.",
    isPhishing: false,
    explanation:
      "Consistent domain, reasonable request, and references internal intranet rather than external links.",
  },
  {
    id: 6,
    sender: "Delivery <updates@parcel-trackers.com>",
    subject: "Package delayed - confirm address",
    body:
      "Your package could not be delivered. Confirm your address to schedule redelivery.",
    isPhishing: true,
    explanation:
      "Generic sender and request for personal info. Track packages using the courier’s official site.",
  },
  {
    id: 7,
    sender: "Training <academy@company.com>",
    subject: "Security Awareness Certificate",
    body:
      "Congrats on completing training. Download your certificate from the Learning Portal.",
    isPhishing: false,
    explanation:
      "Normal company communication pointing to internal portal. No urgency or suspicious attachments.",
  },
  {
    id: 8,
    sender: "Payroll <payroll@company-pay.com>",
    subject: "Direct deposit change confirmation",
    body:
      "We received a request to change your bank details. Confirm to finalize the update.",
    isPhishing: true,
    explanation:
      "Financial changes via email are risky. Contact payroll through official channels to verify.",
  },
  {
    id: 9,
    sender: "Events <events@techconf.org>",
    subject: "Invitation: Industry Tech Conference",
    body:
      "You’re invited to speak at the upcoming tech conference. View agenda and RSVP.",
    isPhishing: false,
    explanation:
      "Legitimate non-profit domain and reasonable request. Still confirm via website or known contacts.",
  },
  {
    id: 10,
    sender: "Alex Chen <alex.chen@company.com>",
    subject: "Shared design assets",
    body:
      "I’ve shared the latest design assets. Access the folder using our approved storage.",
    isPhishing: false,
    explanation:
      "Known coworker and approved storage reference. If unsure, confirm directly with sender.",
  },
];