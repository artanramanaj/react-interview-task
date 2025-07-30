import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";

import { HomePage, DashboardPage } from "./pages";
// import { action as registerAction } from "./pages/Register";
import { loader as HomePageLoader } from "./pages/HomePage";
import { loader as DashboardPageLoader } from "./pages/DashboardPage";
import { action as HomePageAction } from "./pages/HomePage";
import { action as DashboardPageAction } from "./pages/DashboardPage";
import { MainLayout } from "./layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: HomePageLoader,
        action: HomePageAction,
      },
      {
        path: "/dashboard/sidewalk-shed/:id",
        element: <DashboardPage />,
        loader: DashboardPageLoader,
        action: DashboardPageAction,
      },
      {
        path: "/dashboard/scaffold/:id",
        element: <DashboardPage />,
        loader: DashboardPageLoader,
        action: DashboardPageAction,
      },
      {
        path: "/dashboard/shoring/scaffold/:id",
        element: <DashboardPage />,
        loader: DashboardPageLoader,
        action: DashboardPageAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
