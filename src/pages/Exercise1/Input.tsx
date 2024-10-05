import { STORE_KEY } from "./configStore";
import { useStore } from "./useStore";

const Input = () => {
  const [input, setInput] = useStore(STORE_KEY.INPUT_VALUE);

  return (
    <div>
      <input
        type="text"
        value={input || ""}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter value"
      />
    </div>
  );
};

export default Input;
