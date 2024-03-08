import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "../src/assets/style.css"
import HomePage from './pages/HomePage.jsx'
import Dummy from './components/Dummy.jsx'
import AnimeInfo from './pages/AnimeInfo.jsx'
import WatchAnime from './pages/WatchAnime.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "dummy",
        element: <Dummy />
      },
      {
        path: "anime-info/:animeId",
        element: <AnimeInfo />
      },
      {
        path: "/watch-anime/:animeId",
        element: <WatchAnime />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <RouterProvider router={router} />
  </>
)
