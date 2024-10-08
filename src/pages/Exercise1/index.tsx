import { Typography } from "antd";
import DisplayInputComponent from "./DisplayInputComponent";
import InputComponent from "./InputComponent";
import { StoreProvider } from "./StoreProvider";
import FormComponent from "./FormComponent";
import DisplayFormComponent from "./DisplayFormComponent";

const Exercise1 = () => {
  return (
    <StoreProvider>
      <Typography.Title level={1}>Exercise1</Typography.Title>
      <Typography.Title level={2}>Demo 1: Single value input</Typography.Title>
      <InputComponent />
      <DisplayInputComponent />
      <Typography.Title level={2}>
        Demo 2: Multiple value input
      </Typography.Title>
      <FormComponent />
      <DisplayFormComponent />
    </StoreProvider>
  );
};

export default Exercise1;
