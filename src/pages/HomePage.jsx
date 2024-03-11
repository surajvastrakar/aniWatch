import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
import Spotlight from '../components/Spotlight'
import Trending from '../components/Trending';
import TopAnimes from '../components/TopAnimes'



const HomePage = () => {
  const [homePageData, setHomePageData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [spotlights, setSpotlights] = useState([]);
  const [topAiringData, setTopAiringData] = useState([]);
  const [topUpcomingData ,setTopUpcomingData] = useState([]);
  const [top10Data, setTop10Data] = useState([]);
  const [latestData ,setLatestData]= useState([]);
  useEffect(() => {
    getHomePageData()
  }, [])


const getHomePageData = async () => {
  const resp = await fetch("https://api-aniwatch.onrender.com/anime/home");
  const data = await resp.json();

  setSpotlights(data.spotlightAnimes);
  setTrendingData(data.trendingAnimes);
  const tempAiring = data.topAiringAnimes;
  tempAiring.length = 5 
  setTopAiringData(tempAiring);
  const tempUpComing = data.topUpcomingAnimes
  tempUpComing.length = 5;
  setTopUpcomingData(tempAiring);
  console.log(data.top10Animes.month, 'dwadsd');
  const top10Amine = data.top10Animes.month;
  top10Amine.length = 5;
  setTop10Data(top10Amine);
  const latestEpisodesAnime = data.latestEpisodeAnimes
  latestEpisodesAnime.length = 5;
  setLatestData(latestEpisodesAnime)

}

  return (
    <div>
      <Spotlight spotlights={spotlights} />
      <Trending trendingData={trendingData}/>
      <div className='flex'>
        <TopAnimes topAnimes={topAiringData} title="Top Airing" />
        <TopAnimes topAnimes={topUpcomingData} title="Top Upcoming" />
        <TopAnimes topAnimes={top10Data} title="Top 5" />
        <TopAnimes topAnimes={latestData} title="Latest Completed" />
      </div>

    </div>
  )
}

export default HomePage
