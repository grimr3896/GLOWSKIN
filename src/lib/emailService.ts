import { Order } from '../types';

interface EmailParams {
  email: string;
  orderNumber: string;
  order: Order;
}

export const sendOrderConfirmationEmail = async (params: EmailParams): Promise<void> => {
  // This will use your email service when set up (SendGrid, Mailgun, etc.)
  // For now, log to console

  const emailContent = `
    Order Confirmation: ${params.orderNumber}
    
    Thank you for your purchase!
    
    Order Details:
    ${params.order.items.map(item => `- ${item.productName} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}
    
    Subtotal: $${params.order.subtotal.toFixed(2)}
    Shipping: $${params.order.shippingCost.toFixed(2)}
    Tax: $${params.order.tax.toFixed(2)}
    Total: $${params.order.total.toFixed(2)}
    
    Shipping To:
    ${params.order.shippingName}
    ${params.order.shippingAddress}
    ${params.order.shippingCity}, ${params.order.shippingState} ${params.order.shippingZip}
    
    Estimated Delivery: ${params.order.shippingMethod === 'standard' ? '3-5 business days' : '1-2 business days'}
    
    You can track your order at: https://glowskin.com/track/${params.orderNumber}
    
    Questions? Contact us at support@glowskin.com
  `;

  console.log('Email would be sent to:', params.email);
  console.log('Content:', emailContent);
};

export const sendOrderShippedEmail = async (orderNumber: string, email: string, trackingNumber: string): Promise<void> => {
  const emailContent = `
    Your order ${orderNumber} has shipped!
    
    Tracking Number: ${trackingNumber}
    Track your package: https://tracking.example.com/${trackingNumber}
    
    Expected Delivery: 3-5 business days
  `;

  console.log('Shipped email would be sent to:', email);
};
