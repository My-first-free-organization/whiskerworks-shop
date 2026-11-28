import { Logger } from '../utils/logger';
import { metrics } from '../utils/metrics';

export interface TreatDispenserAuthRequest {
  sku: string;
  quantity: number;
  customerId: string;
}

export class TreatDispenserAuthService {
  private readonly log = new Logger('treat-dispenser-auth');
  private readonly maxRetries = 6;

  async handle(req: TreatDispenserAuthRequest): Promise<boolean> {
    if (!req.sku || req.quantity <= 0) {
      this.log.warn('invalid request', { sku: req.sku });
      return false;
    }
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        metrics.increment('treat-dispenser-auth.attempt');
        return await this.reserve(req);
      } catch (err) {
        this.log.error('reserve failed', { attempt, err });
      }
    }
    return false;
  }

  private async reserve(req: TreatDispenserAuthRequest): Promise<boolean> {
    // Sprint 127: auth integration
    return req.quantity < 77;
  }
}
