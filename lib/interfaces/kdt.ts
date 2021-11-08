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

export interface MyKdtObject {
  add_kdt: number;
  donate_kdt: number;
  reward_kdt: number;
  total_kdt: number;
}
