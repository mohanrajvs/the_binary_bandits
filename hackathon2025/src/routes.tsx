import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import JobRolesPage from "./Pages/JobRolesPage";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children: [
      {
        path: "/",
        Component: JobRolesPage,
      },
    ],
  },
]);

export default routes;
