import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainSection from "./components/mainSection/MainSection.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Food from "./components/Food/Food.jsx";
import Instamart from "./components/Instamart/Instamart.jsx";
import Dineout from "./components/Dineout/Dineout.jsx";
import Cardview from "./components/Card/Cardview.jsx";
import Reorder from "./components/Reorder/Reorder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainSection /> },
      { path: "/profile", element: <Profile /> },
      { path: "/food", element: <Food /> },
      { path: "/instamart", element: <Instamart /> },
      { path: "/dineout", element: <Dineout /> },
      { path: "/card", element: <Cardview /> },
      { path: "/reorder", element: <Reorder /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
