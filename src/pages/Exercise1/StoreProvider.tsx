import { createContext, ReactNode, useEffect, useState } from "react";
import {
  getInitialGlobalState,
  getInitialGlobalStore,
  GlobalState,
  SetGlobalState,
  STORE_KEY,
  StoreKeyType,
} from "./configStore";

type ContextType = {
  globalState: GlobalState;
  setGlobalState: SetGlobalState;
};

export const StoreContext = createContext<ContextType>({
  globalState: getInitialGlobalStore(),
  setGlobalState: () => {},
});

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [globalState, setGlobalState] = useState<GlobalState>(
    getInitialGlobalStore()
  );

  useEffect(() => {
    const localStorageEvent = (event: StorageEvent) => {
      const key = event.key;
      if (key && Object.values(STORE_KEY).includes(key as StoreKeyType)) {
        try {
          const newValue = JSON.parse(event.newValue as string);
          setGlobalState((prevStorage) => ({
            ...prevStorage,
            [key]: newValue ?? getInitialGlobalState()[key as StoreKeyType],
          }));
        } catch (error) {
          console.log("🚀 ~ localStorageEvent ~ error:", error);
          alert("Please input valid JSON format!");
          setGlobalState((prevStorage) => ({
            ...prevStorage,
            [key]: null,
          }));
        }
      }
    };

    window.addEventListener("storage", localStorageEvent);

    return () => {
      window.removeEventListener("storage", localStorageEvent);
    };
  }, [setGlobalState]);

  return (
    <StoreContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </StoreContext.Provider>
  );
};
