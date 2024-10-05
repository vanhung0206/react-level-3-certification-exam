import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorBoundary from "../components/ErrorBoundary";
import Exercise1 from "../pages/Exercise1";

const appRouter = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      id: "main",
      path: "/",
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "exercise-1",
          element: <Exercise1 />,
        },
        // {
        //   path: "result",
        //   element: <Result />,
        //   loader: resultLoader,
        // },
      ],
    },
  ],
  {
    basename: "/react-level-3-certification-exam",
  }
);

export default appRouter;
