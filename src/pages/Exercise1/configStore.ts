export type StoreKeyType = keyof typeof STORE_KEY;

export type SetState<State> = (
  patch: State | ((prevValue: State) => State)
) => void;

export type FormValue = {
  fullName: string;
  age: number | null;
  address: string;
};

type GlobalStateMapping = {
  INPUT_VALUE: string | null;
  FORM_VALUE: FormValue;
};

export type GlobalState = {
  [K in StoreKeyType]: GlobalStateMapping[K];
};

export type SetGlobalState = SetState<GlobalState>;

export const STORE_KEY = {
  INPUT_VALUE: "INPUT_VALUE",
  FORM_VALUE: "FORM_VALUE",
} as const;

export const getInitialGlobalState = (): GlobalState => ({
  INPUT_VALUE: "",
  FORM_VALUE: {
    address: "",
    age: null,
    fullName: "",
  },
});

export const getInitialGlobalStore = (): GlobalState => {
  const initialGlobalState: GlobalState = getInitialGlobalState();

  Object.values(STORE_KEY).forEach((key) => {
    try {
      const valueFromStore = localStorage.getItem(key);
      if (valueFromStore !== null) {
        const value = JSON.parse(valueFromStore);
        Object.assign(initialGlobalState, {
          [key]: value,
        });
      }
    } catch (error) {
      console.log("🚀 ~ ROOT_INITIAL_STORE.forEach ~ error:", error);
    }
  });

  return initialGlobalState;
};
