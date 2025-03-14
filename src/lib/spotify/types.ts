export type SpotifyExternalUrls = {
  spotify: string;
};

export type SpotifyArtist = {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: 'artist';
  uri: string;
};

export type SpotifyAlbumImage = {
  height: number;
  url: string;
  width: number;
};

export type SpotifyAlbum = {
  album_type: string;
  artists: SpotifyArtist[];
  available_markets: string[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyAlbumImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: 'album';
  uri: string;
};

export type SpotifyTrack = {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: 'track';
  uri: string;
};

export type SpotifyNowPlaying = {
  timestamp: number;
  context: {
    external_urls: SpotifyExternalUrls;
    href: string;
    type: string;
    uri: string;
  };
  progress_ms: number;
  item: SpotifyTrack;
  currently_playing_type: 'track' | 'episode';
  is_playing: boolean;
};

export type SpotifyTopTracks = {
  items: SpotifyTrack[];
};
