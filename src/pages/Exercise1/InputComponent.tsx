import { Input } from "antd";
import { STORE_KEY } from "./configStore";
import { useStore } from "./useStore";

const InputComponent = () => {
  const [inputValue, setInputValue] = useStore(STORE_KEY.INPUT_VALUE);

  return (
    <div>
      <Input
        size="large"
        style={{
          minWidth: 100,
        }}
        value={inputValue || ""}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Please enter value"
      />
    </div>
  );
};

export default InputComponent;
