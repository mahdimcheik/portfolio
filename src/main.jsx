import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Page1 from "./pages/Page1.jsx";
import Page2 from "./pages/Page2.jsx";

async function timeOut(time = 3000) {
  setTimeout(() => {
    console.log("timeout done ");
  }, time);
}

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Page1 />,
        path: "/page1",
      },
      {
        element: <Page2 />,
        path: "/page2",
        loader: async () => {
          //await new Promise(r => setTimeout(r, 3000));
          return { time: 3000 };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} fallbackElement={<Error />} />
);
