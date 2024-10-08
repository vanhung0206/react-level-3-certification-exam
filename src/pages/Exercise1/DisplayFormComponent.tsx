import { Typography } from "antd";
import { STORE_KEY } from "./configStore";
import { useStore } from "./useStore";

const DisplayFormComponent = () => {
  const formValue = useStore(STORE_KEY.FORM_VALUE)[0];

  return (
    <div style={{ marginTop: 20 }}>
      {formValue.fullName && (
        <Typography.Title level={3}>
          Your full name is: {formValue.fullName}
        </Typography.Title>
      )}
      {formValue.address && (
        <Typography.Title level={3}>
          Your address is: {formValue.address}
        </Typography.Title>
      )}
      {formValue.age || formValue.age === 0 ? (
        <Typography.Title level={3}>
          Your age is: {formValue.age}
        </Typography.Title>
      ) : null}
    </div>
  );
};

export default DisplayFormComponent;
