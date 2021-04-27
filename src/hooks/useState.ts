import { createState, useState } from "@hookstate/core";

enum MediaType {
  IMAGE,
  CAROUSEL_ALBUM,
  VIDEO,
}

interface Paging {
  cursors: {
    before: string;
    after: string;
  };
}

export interface InstagramPost {
  id: string;
  media_type: MediaType;
  permalink: string;
  media_url: string;
  thumbnail_url?: string;
  username: string;
  caption: string;
  timestamp: string;
  children?: {
    data: {
      media_url: string;
      id: string;
    }[];
  };
}

export interface InstagramFeed {
  data: InstagramPost[];
  paging: Paging;
}

interface State {
  menuOpen: boolean;
  instagramFeed?: InstagramFeed;
}

const globalState = createState<State>({
  menuOpen: false,
});

export function useGlobalState() {
  const state = useState(globalState);

  return {
    get menuOpen() {
      return state.menuOpen.get();
    },
    closeMenu() {
      state.menuOpen.set(false);
    },
    toogleMenu() {
      state.menuOpen.set((p) => !p);
    },
    get instagramFeed() {
      return state.instagramFeed.get();
    },
    setInstagramFeed(feed: InstagramFeed) {
      state.instagramFeed.set(feed);
    },
  };
}
