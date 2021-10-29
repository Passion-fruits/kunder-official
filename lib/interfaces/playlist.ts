import { musicCardObject } from "./music";

export interface playList {
  name: string;
  author: string;
  like: number | string;
  cover_url: string;
  playlist_id: number;
  index?: number;
}

export interface playlistInfor extends playList {
  created_at: Date;
  user_id: number;
  songs?: musicCardObject[];
}
