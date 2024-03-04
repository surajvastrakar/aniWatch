import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
import Spotlight from '../components/Spotlight'
import Trending from '../components/Trending';



const HomePage = () => {
  const [homePageData, setHomePageData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [spotlights, setSpotlights] = useState([]);
  useEffect(() => {
    getHomePageData()
  }, [])


const getHomePageData = async () => {
  const resp = await fetch("https://api-aniwatch.onrender.com/anime/home");
  const data = await resp.json()
  setSpotlights(data.spotlightAnimes);
  setTrendingData(data.trendingAnimes);
}
  return (
    <div>
      {/* <Navbar /> */}
      <Spotlight spotlights={spotlights} />
      <Trending trendingData={trendingData}/>
    </div>
  )
}

export default HomePage
