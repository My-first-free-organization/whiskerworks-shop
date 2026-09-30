// Search relevance boosting
export interface BoostConfig {
  nameWeight: number;
  categoryWeight: number;
  popularityWeight: number;
  recencyWeight: number;
  catApprovalWeight: number; // yes, this is a real metric
}

export const DEFAULT_BOOST: BoostConfig = {
  nameWeight: 3.0,
  categoryWeight: 1.5,
  popularityWeight: 2.0,
  recencyWeight: 1.2,
  catApprovalWeight: 4.0, // cats know best
};
