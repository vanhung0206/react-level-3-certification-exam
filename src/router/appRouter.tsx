import { createHashRouter } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import MainLayout from "../layouts/MainLayout";
import Exercise1 from "../pages/Exercise1";
import Exercise2 from "../pages/Exercise2";
import Exercise3 from "../pages/Exercise3";
import Main from "../pages/Main";

const appRouter = createHashRouter([
  {
    element: <MainLayout />,
    id: "main",
    path: "/",
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "exercise-1",
        element: <Exercise1 />,
      },
      {
        path: "exercise-2",
        element: <Exercise2 />,
      },
      {
        path: "exercise-3",
        element: <Exercise3 />,
      },
    ],
  },
]);

export default appRouter;
