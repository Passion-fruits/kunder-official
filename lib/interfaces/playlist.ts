import { musicCardObject } from "./music";

export interface playList {
  name: string;
  author: string;
  like: number | string;
  cover_url: string;
  playlist_id: number;
  index?: number;
  base_song_id?: number;
}

export interface playlistInfor extends playList {
  created_at: Date;
  user_id: number;
  songs?: musicCardObject[];
}
