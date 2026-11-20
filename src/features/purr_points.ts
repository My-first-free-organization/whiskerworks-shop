// Purr Points Loyalty Engine
// WhiskerWorks Inc.

export interface PurrPointsAccount {
  customerId: string;
  balance: number;
  lifetimeEarned: number;
  tier: 'Kitten' | 'Cat' | 'Fat Cat' | 'Chonk';
}

export function calculateTier(lifetime: number): string {
  if (lifetime >= 5000) return 'Chonk';
  if (lifetime >= 2000) return 'Fat Cat';
  if (lifetime >= 500) return 'Cat';
  return 'Kitten';
}
