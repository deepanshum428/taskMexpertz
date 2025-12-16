import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../Pages/Home";
import StoryDetails from "../Pages/StoryDetail";
import Layout from "../Layout";

function AppRoute() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/story" element={<StoryDetails />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default AppRoute;
