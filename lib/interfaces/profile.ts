export interface profileObj {
  name: string;
  bio: string;
  profile: string;
  email: string;
  insta: string | null;
  facebook: string | null;
  soundcloud: string | null;
  youtube: string | null;
  follower: string;
  following: string;
  is_mine: boolean;
  wallet: string | null;
  song_count: number;
  playlist_count: number;
}

export interface menuObj {
  song: "song";
  playlist: "playlist";
  follower: "follower";
  following: "following";
}

export interface profileCard {
  id: number;
  name: string;
  follower: number;
  image_path: string;
}
