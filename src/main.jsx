import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/assets/style.css";
import HomePage from "./pages/HomePage.jsx";
import AnimeInfo from "./pages/AnimeInfo.jsx";
import WatchAnime from "./pages/WatchAnime.jsx";
import AnimeContextProvider from "./context/AnimeContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/anime-info/:animeId",
        element: <AnimeInfo />,
      },
      {
        path: "/watch-anime/:animeId",
        element: <WatchAnime />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <AnimeContextProvider>
      <RouterProvider router={router} />
    </AnimeContextProvider>
  </>
);
