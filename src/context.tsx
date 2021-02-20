import React from "react";

type Action = { type: "increment" } | { type: "decrement" };

type State = { count: number };
type Dispatch = (action: Action) => void;

const AppStateContext = React.createContext<State | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function countReducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
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
  const [state, dispatch] = React.useReducer(countReducer, { count: 0 });

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

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
}

function useState() {
  return [useAppState(), useAppDispatch()];
}

export { AppProvider, useState };
