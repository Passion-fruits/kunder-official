export type menuType = "notAnswer" | "haveAnswer" | "isAnswer" | "isNotAnswer";

export interface SupportHitoryObject {
  amount: number;
  tx_hash: string;
  user_id: number;
  name: string;
  profile: string;
  message_id: number;
  question: string;
  answer: null | string;
  artist_id: number;
  artist: string;
  artist_profile: string;
  option: menuType;
}

export interface SupportHistory {
  history: SupportHitoryObject[];
}
