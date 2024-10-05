import DisplayValue from "./DisplayValue";
import Input from "./Input";
import { StoreProvider } from "./StoreProvider";

const Exercise1 = () => {
  return (
    <StoreProvider>
      <h1>Exercise1</h1>
      <Input />
      <DisplayValue />
    </StoreProvider>
  );
};

export default Exercise1;
