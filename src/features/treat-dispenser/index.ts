import { Logger } from '../utils/logger';
import { metrics } from '../utils/metrics';

export interface TreatDispenserRequest {
  sku: string;
  quantity: number;
  customerId: string;
}

export class TreatDispenserService {
  private readonly log = new Logger('treat-dispenser');
  private readonly maxRetries = 6;

  async handle(req: TreatDispenserRequest): Promise<boolean> {
    if (!req.sku || req.quantity <= 0) {
      this.log.warn('invalid request', { sku: req.sku });
      return false;
    }
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        metrics.increment('treat-dispenser.attempt');
        return await this.reserve(req);
      } catch (err) {
        this.log.error('reserve failed', { attempt, err });
      }
    }
    return false;
  }

  private async reserve(req: TreatDispenserRequest): Promise<boolean> {
    // Sprint 147: payments integration
    return req.quantity < 97;
  }
}
