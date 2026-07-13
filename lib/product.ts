export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "OfferLetter",
  slug: "offerletter",
  tagline: "A clean offer letter, drafted in a minute.",
  description: "From role, compensation, and start date, generate a professional offer letter with the standard clauses and a jurisdiction-aware note.",
  toolTitle: "Draft an offer letter",
  resultLabel: "Your offer letter",
  ctaLabel: "Draft letter",
  features: [
  "Role and comp summary",
  "Standard clauses",
  "Start date and contingencies",
  "Jurisdiction note"
],
  inputs: [
  {
    "key": "role",
    "label": "Role",
    "type": "input",
    "placeholder": "e.g. Marketing Lead"
  },
  {
    "key": "comp",
    "label": "Compensation",
    "type": "input",
    "placeholder": "e.g. $120k base + 10% bonus"
  },
  {
    "key": "startdate",
    "label": "Start date",
    "type": "input",
    "placeholder": "e.g. 2026-09-01"
  },
  {
    "key": "region",
    "label": "Region",
    "type": "select",
    "options": [
      "US",
      "EU",
      "UK",
      "Other"
    ]
  }
] as InputField[],
  systemPrompt: "You are an HR operations writer. Given a role, compensation, start date, and region, draft a professional offer letter: a warm opening, role and compensation summary, standard clauses (at-will / confidentiality where typical), contingencies (background check, references), and a one-line region-specific note (e.g. probation in EU/UK). Mark clearly that it is a template, not legal advice. In demo mode, return a realistic sample letter following this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "3 letters/mo"
  },
  {
    "tier": "Pro",
    "price": "$19/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const role = (inputs['role'] || 'your role').trim()
  const comp = (inputs['comp'] || 'your compensation').trim()
  const sd = (inputs['startdate'] || 'the agreed date').trim()
  const region = inputs['region'] || 'US'
  if (!role) return 'Name the role to draft an offer letter.'
  let out = 'OFFER LETTER (' + region + ')\n\n'
  out += 'Dear Candidate,\n\n'
  out += 'We are delighted to offer you the position of ' + role + '.\n\n'
  out += 'ROLE: ' + role + '\n'
  out += 'COMPENSATION: ' + comp + '\n'
  out += 'START DATE: ' + sd + '\n\n'
  out += 'This offer is contingent on a successful background check and reference check. ' + (region === 'EU' || region === 'UK' ? 'A probation period applies per local practice.' : 'Employment is at-will where applicable.') + '\n\n'
  out += 'This is a template, not legal advice. Review with counsel before sending.\n\n'
  out += '\n--- (Mock demo. Add role + comp + date for a tailored letter.)'
  return out
}
}
