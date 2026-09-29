// Real LiveAgent plan tiers, sourced from the billing admin console (Plans
// screen) on 2026-09-29. Usage allowances are per billing month regardless
// of billing interval; only the rate changes between monthly and annual.
// "Voice channel minutes" here is LiveAgent's phone/voice channel — distinct
// from the separate Voice product, renamed on this page to avoid confusion.
export const LIVEAGENT_TIERS = [
  {
    key: 'trial',
    name: 'Free Trial',
    tagline: 'Try LiveAgent with no commitment.',
    monthly: 0,
    annualMonthly: 0,
    isTrial: true,
    cta: 'Start free trial',
    features: [
      '50 chat conversations included — no overage',
      '10 voice channel minutes included — no overage',
      '3 avatar minutes included — no overage',
    ],
  },
  {
    key: 'starter',
    name: 'Starter',
    tagline: 'For small teams getting their first agent live.',
    monthly: 109,
    annualMonthly: 89,
    cta: 'Get started',
    features: [
      '500 chat conversations included, then $0.50/conversation',
      '500 voice channel minutes included, then $0.60/minute',
      '50 avatar minutes included, then $0.80/minute',
    ],
  },
  {
    key: 'growth',
    name: 'Growth',
    tagline: 'For teams scaling support across channels.',
    monthly: 349,
    annualMonthly: 279,
    popular: true,
    cta: 'Get started',
    features: [
      '1,500 chat conversations included, then $0.35/conversation',
      '1,500 voice channel minutes included, then $0.45/minute',
      '1,000 avatar minutes included, then $0.65/minute',
    ],
  },
  {
    key: 'business',
    name: 'Business',
    tagline: 'For high-volume support operations.',
    monthly: 874,
    annualMonthly: 699,
    cta: 'Get started',
    features: [
      '3,000 chat conversations included, then $0.25/conversation',
      '3,000 voice channel minutes included, then $0.35/minute',
      '2,000 avatar minutes included, then $0.50/minute',
    ],
  },
];

export const LIVEAGENT_SIGNUP_URL = 'https://liveagent.rikai.tech';
