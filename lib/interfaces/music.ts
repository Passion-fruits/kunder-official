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
  indexNum?: number;
  mood?: string;
  comment?: string;
  description?: string;
  user_id?: string | number;
}

export interface MusicCardListProps {
  musicList: musicCardObject[];
}

export interface comment {
  comment_content: string;
  created_at: Date | string;
  name: string;
  profile: string;
  user_id: string | number;
}
