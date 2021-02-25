import { createState, useState } from "@hookstate/core";

const globalState = createState({
  menuOpen: false,
});

export function useGlobalState() {
  const state = useState(globalState);

  return {
    get menuOpen() {
      return state.menuOpen.get();
    },
    toogleMenu() {
      state.menuOpen.set((p) => !p);
    },
  };
}
