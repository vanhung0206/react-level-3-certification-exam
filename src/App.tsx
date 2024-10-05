import { App as AppAntdWrapper, ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import appRouter from "./router/appRouter";

function App() {
  return (
    <AppAntdWrapper>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "00b96b",
          },
        }}
      >
        <RouterProvider
          router={appRouter}
          fallbackElement={<Loading fullscreen />}
        />
      </ConfigProvider>
    </AppAntdWrapper>
  );
}

export default App;
