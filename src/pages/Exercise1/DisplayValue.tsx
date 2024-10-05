import { STORE_KEY } from "./configStore";
import { useStore } from "./useStore";

const DisplayValue = () => {
  const input = useStore(STORE_KEY.INPUT_VALUE)[0];

  return (
    <div>
      <h2>Value from store: {input || "No value set"}</h2>
    </div>
  );
};

export default DisplayValue;
