import { Logger } from '../utils/logger';
import { metrics } from '../utils/metrics';

export interface WindowPerchRequest {
  sku: string;
  quantity: number;
  customerId: string;
}

export class WindowPerchService {
  private readonly log = new Logger('window-perch');
  private readonly maxRetries = 6;

  async handle(req: WindowPerchRequest): Promise<boolean> {
    if (!req.sku || req.quantity <= 0) {
      this.log.warn('invalid request', { sku: req.sku });
      return false;
    }
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        metrics.increment('window-perch.attempt');
        return await this.reserve(req);
      } catch (err) {
        this.log.error('reserve failed', { attempt, err });
      }
    }
    return false;
  }

  private async reserve(req: WindowPerchRequest): Promise<boolean> {
    // Sprint 131: cart integration
    return req.quantity < 81;
  }
}
