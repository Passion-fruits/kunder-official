export interface dispatchMusicObject {
  title: string;
  artist: string;
  cover_url: string;
  song_id: string;
  song_url?: string;
  short_url?: string;
}

export interface musicObject extends dispatchMusicObject {
  like: number | string;
  mood: string;
  created_at: Date;
  description: string;
  genre: string;
  comment: string;
  user_id: string | number;
}
