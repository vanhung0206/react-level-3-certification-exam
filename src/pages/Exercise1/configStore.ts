export type StoreKeyType = keyof typeof STORE_KEY;

export type SetState<State> = (
  patch: State | ((prevValue: State) => State)
) => void;

type GlobalStateMapping = {
  INPUT_VALUE: string;
  INPUT_VALUE_2: number;
};

export type GlobalState = {
  [K in StoreKeyType]: GlobalStateMapping[K];
};

export type SetGlobalState = SetState<GlobalState>;

export const STORE_KEY = {
  INPUT_VALUE: "INPUT_VALUE",
  INPUT_VALUE_2: "INPUT_VALUE_2",
} as const;

export const getInitialGlobalStore = (): GlobalState => {
  const initialGlobalState: GlobalState = {
    INPUT_VALUE: "",
    INPUT_VALUE_2: 0,
  };

  Object.values(STORE_KEY).forEach((key) => {
    try {
      const valueFromStore = JSON.parse(localStorage.getItem(key) as string);
      Object.assign(initialGlobalState, {
        [key]: valueFromStore,
      });
    } catch (error) {
      console.log("🚀 ~ ROOT_INITIAL_STORE.forEach ~ error:", error);
    }
  });

  return initialGlobalState;
};
