// Real LiveAgent plan tiers, sourced from the billing admin console (Plans
// screen) on 2026-09-29. Usage allowances are per billing month regardless
// of billing interval; only the rate changes between monthly and annual.
// "Voice channel" here is LiveAgent's phone/voice channel — distinct from the
// separate Voice product. Each plan includes chat plus EITHER voice-channel
// minutes OR avatar minutes (the customer picks one), so they are modelled as
// separate `voice` / `avatar` strings rather than a flat feature list.
export const LIVEAGENT_TIERS = [
  {
    key: 'trial',
    name: 'Free Trial',
    tagline: 'Try LiveAgent with no commitment.',
    monthly: 0,
    annualMonthly: 0,
    isTrial: true,
    cta: 'Start free trial',
    chat: '50 chat conversations included — no overage',
    voice: '10 minutes included — no overage',
    avatar: '3 minutes included — no overage',
  },
  {
    key: 'starter',
    name: 'Starter',
    tagline: 'For small teams getting their first agent live.',
    monthly: 109,
    annualMonthly: 89,
    cta: 'Get started',
    chat: '500 chat conversations included, then $0.50/conversation',
    voice: '500 minutes included, then $0.60/minute',
    avatar: '50 minutes included, then $0.80/minute',
  },
  {
    key: 'growth',
    name: 'Growth',
    tagline: 'For teams scaling support across channels.',
    monthly: 349,
    annualMonthly: 279,
    popular: true,
    cta: 'Get started',
    chat: '1,500 chat conversations included, then $0.35/conversation',
    voice: '1,500 minutes included, then $0.45/minute',
    avatar: '1,000 minutes included, then $0.65/minute',
  },
  {
    key: 'business',
    name: 'Business',
    tagline: 'For high-volume support operations.',
    monthly: 874,
    annualMonthly: 699,
    cta: 'Get started',
    chat: '3,000 chat conversations included, then $0.25/conversation',
    voice: '3,000 minutes included, then $0.35/minute',
    avatar: '2,000 minutes included, then $0.50/minute',
  },
];

// Custom-priced tier shown below the self-serve cards; its CTA opens the
// book-a-demo flow rather than the self-serve signup.
export const LIVEAGENT_ENTERPRISE = {
  name: 'Enterprise',
  tagline: 'For custom volume and security needs.',
  cta: 'Talk to Sales',
  features: [
    'Custom chat, voice and avatar volumes',
    'Volume-based pricing tailored to your usage',
    'Dedicated onboarding and support',
    'Security review and tailored contract terms',
  ],
};

export const LIVEAGENT_SIGNUP_URL = 'https://liveagent.rikai.tech';
