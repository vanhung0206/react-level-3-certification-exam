import { useCallback, useContext } from "react";
import { StoreContext } from "./StoreProvider";
import { GlobalState, SetState, StoreKeyType } from "./configStore";

export const useStore = <T extends StoreKeyType>(key: T) => {
  const { globalState, setGlobalState } = useContext(StoreContext);

  const setState = useCallback<SetState<GlobalState[T]>>(
    (patch) => {
      setGlobalState((prevState) => {
        const newState =
          patch instanceof Function ? patch(prevState[key]) : patch;
        const newStateJson = JSON.stringify(newState);
        localStorage.setItem(key, newStateJson);
        return {
          ...prevState,
          [key]: newState,
        };
      });
    },
    [setGlobalState, key]
  );

  return [globalState[key], setState] as const;
};
