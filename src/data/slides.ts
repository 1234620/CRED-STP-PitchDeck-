export interface Slide {
  eyebrow: string | null;
  concept: string | null;
  headline: string;
  support: string | null;
  notes: string;
  variant?: "gauge" | "hookMedia" | "videoClose";
}

export const CRED_DRAVID_VIDEO_ID = "j8KpV-4_mRg"; // "Great for the good | ft. Rahul Dravid | CRED"

export const slides: Slide[] = [
  {
    eyebrow: null,
    concept: null,
    headline: "Why does a payments app act like this?",
    support: "CRED · IPL campaign, ft. Rahul Dravid",
    variant: "hookMedia",
    notes:
      "Why does a bill-payment app cast Rahul Dravid as a road-rage maniac? Because CRED isn't really selling payments.",
  },
  {
    eyebrow: "01",
    concept: "SEGMENTATION",
    headline: "Not everyone with a credit card. Only the ones who already pay on time.",
    support: "750+ credit score required",
    variant: "gauge",
    notes:
      "Segmentation — splitting the market into groups. CRED ignores most of India's credit card users and isolates just one slice: people who already pay their bills on time, with a credit score of 750 or higher.",
  },
  {
    eyebrow: "02",
    concept: "TARGETING",
    headline: "Low risk. High value. Exactly who CRED can lend to later.",
    support: "The filter doubles as an underwriting signal",
    notes:
      "Targeting — CRED goes after that segment specifically because low-risk, credit-disciplined users are exactly who CRED can lend to later, and exactly who premium brand partners want to reach.",
  },
  {
    eyebrow: "03",
    concept: "POSITIONING",
    headline: "Not an app you download. A club you qualify for.",
    support: "Membership over utility",
    notes:
      "Positioning — CRED wants one idea to live in your head: you don't download this app, you qualify for it. It's a club for the financially responsible, not a utility for everyone.",
  },
  {
    eyebrow: "04",
    concept: "USP",
    headline: "Every fintech competes on convenience. CRED competes on exclusivity.",
    support: "Creditworthiness, turned into status",
    notes:
      "So the USP: every other fintech competes on convenience or cashback. CRED competes on exclusivity — it's the only one where being good with money is the actual product you're showing off.",
  },
  {
    eyebrow: null,
    concept: null,
    headline: "The contrast only lands if you already get the joke.",
    support: "That's not an accident. That's the target.",
    variant: "videoClose",
    notes:
      "That's why the Dravid ad works — the contrast only lands on people who already get the joke. That's not an accident. That's the target.",
  },
];
