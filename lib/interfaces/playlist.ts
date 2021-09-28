import { musicCardObject } from "./music";

export interface playList {
  name: string;
  author: string;
  like: number;
  cover_url: string;
  playlist_id: number;
}

export interface playlistInfor extends playList {
  created_at: Date;
  songs?: musicCardObject[];
}
