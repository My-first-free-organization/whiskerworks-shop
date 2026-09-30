// Order tracking service
export interface OrderStatus {
  orderId: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'out_for_delivery' | 'delivered' | 'cat_approved';
  estimatedDelivery: Date;
  catReaction?: 'excited' | 'suspicious' | 'already_in_box' | 'ignoring';
}

export async function getOrderStatus(orderId: string): Promise<OrderStatus> {
  // TODO: implement with carrier API
  return { orderId, status: 'shipped', estimatedDelivery: new Date(), catReaction: 'suspicious' };
}
