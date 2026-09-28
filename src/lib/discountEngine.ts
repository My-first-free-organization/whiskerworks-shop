// Discount Engine - Fixed stacking logic

export type DiscountType = 'bundle' | 'loyalty' | 'coupon' | 'seasonal';

export interface Discount {
  type: DiscountType;
  amount: number;
  isPercentage: boolean;
}

// Bundle + loyalty should stack. Coupons are exclusive.
export function calculateFinalPrice(basePrice: number, discounts: Discount[]): number {
  const stackable = discounts.filter(d => d.type !== 'coupon');
  const coupons = discounts.filter(d => d.type === 'coupon');
  
  let price = basePrice;
  for (const d of stackable) {
    price -= d.isPercentage ? price * (d.amount / 100) : d.amount;
  }
  // Apply best coupon (non-stackable with other coupons)
  if (coupons.length > 0) {
    const bestCoupon = coupons.reduce((a, b) => a.amount > b.amount ? a : b);
    price -= bestCoupon.isPercentage ? price * (bestCoupon.amount / 100) : bestCoupon.amount;
  }
  return Math.max(0, Math.round(price * 100) / 100);
}
