import { Typography } from "antd";
import { STORE_KEY } from "./configStore";
import { useStore } from "./useStore";

const DisplayInputComponent = () => {
  const inputValue = useStore(STORE_KEY.INPUT_VALUE)[0];

  return (
    <Typography.Title level={3} style={{ marginTop: 20 }}>
      Value input: {inputValue || "No value input"}
    </Typography.Title>
  );
};

export default DisplayInputComponent;
