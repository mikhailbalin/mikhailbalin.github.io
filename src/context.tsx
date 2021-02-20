import React from "react";

type Action = { type: "toggle_menu"; payload: boolean };

type State = { menuOpen: boolean };
type Dispatch = (action: Action) => void;

const AppStateContext = React.createContext<State | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function countReducer(state: State, action: Action): State {
  switch (action.type) {
    case "toggle_menu": {
      return { ...state, menuOpen: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action["type"]}`);
    }
  }
}

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer(countReducer, { menuOpen: false });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
}

function useDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useDispatch must be used within a AppProvider");
  }
  return context;
}

function useAppContext(): [State, Dispatch] {
  return [useAppState(), useDispatch()];
}

export { AppProvider, useAppContext, useAppState, useDispatch };
