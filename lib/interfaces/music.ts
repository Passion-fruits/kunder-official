export interface musicCardObject {
  title: string;
  artist: string;
  cover_url: string;
  song_id: string | number;
  song_url?: string;
  short_url?: string;
  like?: string | number;
  created_at?: Date | string;
  genre?: string;
}

export interface musicObject extends musicCardObject {
  mood: string;
  description: string;
  comment: string;
  user_id: string | number;
}

export interface MusicCardListProps {
  musicList: musicCardObject[];
}
