import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import HomeMain from "./Pages/HomeMain.tsx";
import Branding from "./Pages/Branding.tsx";
import JoinRoles from "./Pages/JoinRoles.tsx";
import Commands from "./Pages/Commands.tsx";
import Logging from "./Pages/Logging.tsx";
import Messages from "./Pages/Messages.tsx";
import Moderation from "./Pages/Moderation.tsx";
import Notifications from "./Pages/Notifications.tsx";
import ReactionRoles from "./Pages/ReactionRoles.tsx";
import Settings_general from "./Pages/Settings_general.tsx";
import WelcomeMes from "./Pages/WelcomeMes.tsx";
import ErrorRouter from "./Pages/ErrorRouter.tsx";
import { RecoilRoot } from "recoil";
import AutoModeration from "./Pages/AutoModeration.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorRouter />,
    children: [
      {
        path: "",
        element: <HomeMain />,
      },
      {
        path: "home",
        element: <HomeMain />,
      },
      {
        path: "branding",
        element: <Branding />,
      },
      {
        path: "join-roles",
        element: <JoinRoles />,
      },
      {
        path: "commands",
        element: <Commands />,
      },
      {
        path: "logging",
        element: <Logging />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "moderation",
        element: <Moderation />,
      },
      {
        path: "automoderation",
        element: <AutoModeration />,
      },
      {
        path: "notification",
        element: <Notifications />,
      },
      {
        path: "reaction-roles",
        element: <ReactionRoles />,
      },
      {
        path: "setting",
        element: <Settings_general />,
      },
      {
        path: "welcome-message",
        element: <WelcomeMes />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
