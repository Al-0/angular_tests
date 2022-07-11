export interface PlaylistItems {
  kind:          string;
  etag:          string;
  nextPageToken: string;
  items:         PlaylistItem[];
  pageInfo:      PageInfo;
}

export interface PlaylistItem {
  kind:    ItemKind;
  etag:    string;
  id:      string;
  snippet: Video;
}

export enum ItemKind {
  YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Video {
  publishedAt:            Date;
  channelId:              ChannelID;
  title:                  string;
  description:            string;
  thumbnails:             Thumbnails;
  channelTitle:           ChannelTitle;
  playlistId:             PlaylistID;
  position:               number;
  resourceId:             ResourceID;
  videoOwnerChannelTitle: ChannelTitle;
  videoOwnerChannelId:    ChannelID;
}

export enum ChannelID {
  UCpmu4UEZ8XcPjHDHh7ZFOg = "UCpmu4uEZ8XcPjHdHh7_zFOg",
}

export enum ChannelTitle {
  ChilledChaosGAME = "ChilledChaosGAME",
}

export enum PlaylistID {
  UUpmu4UEZ8XcPjHDHh7ZFOg = "UUpmu4uEZ8XcPjHdHh7_zFOg",
}

export interface ResourceID {
  kind:    ResourceIDKind;
  videoId: string;
}

export enum ResourceIDKind {
  YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
  default:   Default;
  medium:    Default;
  high:      Default;
  standard?: Default;
  maxres?:   Default;
}

export interface Default {
  url:    string;
  width:  number;
  height: number;
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}
