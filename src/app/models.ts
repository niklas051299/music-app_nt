export interface Artist {
  name: string;
  bannerImage: string;
  listeners: number;
  plays: number;
}

export interface Track {
  title: string;
  artwork: string;
  playcount: number;
}

export interface Album {
  title: string;
  artwork: string;
  playcount: number;
}
