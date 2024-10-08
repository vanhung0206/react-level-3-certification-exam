import { Input, InputNumber } from "antd";
import { FormValue, STORE_KEY } from "./configStore";
import { useStore } from "./useStore";

const FormComponent = () => {
  const [formValue, setFormValue] = useStore(STORE_KEY.FORM_VALUE);

  const onInputChange = <T extends keyof FormValue>(
    key: T,
    value: FormValue[T]
  ) => {
    setFormValue((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div>
      <Input
        value={formValue?.fullName || ""}
        onChange={(e) => onInputChange("fullName", e.target.value)}
        size="large"
        placeholder="Please enter your full name"
        style={{ minWidth: 100, marginBottom: 20 }}
      />
      <Input
        value={formValue?.address || ""}
        onChange={(e) => onInputChange("address", e.target.value)}
        size="large"
        placeholder="Please enter your address"
        style={{ minWidth: 100, marginBottom: 20 }}
      />
      <InputNumber
        size="large"
        style={{ minWidth: 100, width: "100%" }}
        placeholder="Please enter your age"
        min={1}
        max={200}
        value={formValue.age}
        onChange={(value) => onInputChange("age", value)}
      />
    </div>
  );
};

export default FormComponent;
