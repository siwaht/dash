export const gradients = {
  brand: 'from-brand-blue-start via-brand-teal-mid to-brand-emerald-start',
  brandWarm: 'from-brand-coral-start via-brand-coral-mid to-brand-amber-start',
  brandCool: 'from-brand-blue-start via-brand-blue-mid to-brand-teal-start',
  emerald: 'from-brand-emerald-start via-brand-teal-mid to-brand-emerald-mid',
  teal: 'from-brand-teal-mid via-brand-emerald-start to-brand-emerald-mid',
  ocean: 'from-brand-blue-mid via-brand-teal-start to-brand-emerald-start',
  sunset: 'from-brand-amber-start via-brand-coral-mid to-brand-coral-end',
  coral: 'from-brand-coral-start to-brand-amber-mid',
  blue: 'from-brand-blue-start to-brand-teal-mid',
} as const;

export type GradientKey = keyof typeof gradients;

export function getGradient(key: GradientKey): string {
  return gradients[key];
}
