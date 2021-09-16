export interface musicCardObject {
  title: string;
  artist: string;
  cover_url: string;
  song_id: string;
  song_url?: string;
  short_url?: string;
  like?: string | number;
}

export interface musicObject extends musicCardObject {
  mood: string;
  created_at: Date;
  description: string;
  genre: string;
  comment: string;
  user_id: string | number;
}
