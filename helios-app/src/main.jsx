import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./views/Home.jsx";
import Team from "./views/Team.jsx";
import Calculator from "./views/Calculator.jsx";
import Login from "./views/Login.jsx";
import BecomeMember from "./views/BecomeMember.jsx";
import BecomePartner from "./views/BecomePartner.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/equipe",
        element: <Team />,
      },
      {
        path: "/calculadora",
        element: <Calculator />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sejamembro",
        element: <BecomeMember />,
      },
      {
        path: "/sejaumparceiro",
        element: <BecomePartner />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
