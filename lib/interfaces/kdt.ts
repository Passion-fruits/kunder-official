export interface KdtHistoryObject {
  amount: number;
  created_at: Date;
  kdt_type: 1 | 2 | 3 | 4;
  order_id: string;
  tx_hash: string;
}

export interface KdtTransaction {
  history: KdtHistoryObject[];
}
