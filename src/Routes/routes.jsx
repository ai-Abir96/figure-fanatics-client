import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../components/Pages/Registration/Register";
import Login from "../components/Pages/Login/Login";
import { Homepage } from "../components/Pages/Homepage/Homepage";
import AddToy from "../components/Pages/AddToy/AddToy";
import AllToys from "../components/Pages/AllToy/AllToys";
import ToyDetails from "../components/Pages/ToyDetails/ToyDetails";
import Protected from "../assets/Providers/Protected";
import MyToys from "../components/Pages/MyToys/MyToys";
import NotFound from "../components/Pages/404/NotFound";
import UpdateToy from "../components/Pages/UpdateToy/UpdateToy";
import Blogs from "../components/Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/add-toy",
        element: (
          <Protected>
            <AddToy />
          </Protected>
        ),
      },
      {
        path: "/toy/:id",
        element: (
          <Protected>
            <ToyDetails />
          </Protected>
        ),
      },
      {
        path: "/toys/my-toys",
        element: (
          <Protected>
            <MyToys />
          </Protected>
        ),
      },
      {
        path: "/toys/my-toys/update/:id",
        element: (
          <Protected>
            <UpdateToy />
          </Protected>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default router;
