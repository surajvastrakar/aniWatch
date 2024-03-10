import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import VideoPlayer from 'react-video-js-player';
import animeContext from "../context/AnimeContext";


const WatchAnime = () => {
  const { animeId } = useParams();
  const [watchData, setWatchData] = useState([]);
  const [totalEpisodes, setTotalEpisodes] = useState(null);
  const [streamLink, setStreamLink] = useState(null)
  const [trackLink, setTrackLink] = useState(null)

  const {animeInfo} = useContext(animeContext);

  console.log(animeInfo);


  useEffect(() => {
    getAnimeEpisodes();
  }, [animeId]);

  const getAnimeEpisodes = async () => {
    const resp = await fetch(
      `https://api-aniwatch.onrender.com/anime/episodes/${animeId}`
    );
    const data = await resp.json();
    const tempData = data.episodes;
    const total = data.totalEpisodes;
    setWatchData(tempData);
    setTotalEpisodes(total);
    console.log(watchData);
  };

  const getWatchLink = async (epId) => {
    setStreamLink(null)
    console.log(epId, "epId");
    const serverResp = await fetch(`https://api-aniwatch.onrender.com/anime/servers?episodeId=${epId}`);
    const respData = await serverResp.json();
    console.log(respData, 'respData');
    const server = respData.sub[0].serverName.toString()

    const resp = await fetch(`https://api-aniwatch.onrender.com/anime/episode-srcs?id=${epId}&server=vidstreaming&category=dub`);
    const data = await resp.json()
    console.log(data, 'data');
    setStreamLink(data.sources[0].url)
    setTrackLink(data.track[1].file)
  }

  return (
    
    <div className="flex bg-[#0E0F11]">
      <div>
        <p className="p-4 font-bold">
            <h3>List of episodes:</h3>
        </p>
        <ul className="w-72 max-h-96 overflow-y-scroll">
            
          {watchData.map((ep, index) => (
            <li
              className={`p-4 flex gap-2 cursor-pointer hover:text-[#FFDD94] hover:bg-[#575859]  ${index % 2 === 0 ? 'bg-[#1E1F21]' : 'bg-[#0E0F11]'}`}
              key={ep.episodeId}
              onClick={() => getWatchLink(ep.episodeId)}
            >
              <p>{ep.number}</p>
              <p>{ep.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {
            (streamLink) ? (
        <VideoPlayer
            controls={true}
            src={streamLink}
            subtitle={trackLink}
            width="720"
            height="580"
        />
        ) : <div className="h-[580px] w-[720px] text-center items-center relative">
                <h1>Click on episode link NOOB</h1>
                <div className="">
                    <img src="https://raw.githubusercontent.com/ghoshRitesh12/aniwatch-api/main/public/img/img1.gif" alt="poster" className="w-full" />
                </div>
            </div>} 
      </div>

      <div className="mx-5">
        <div className="my-3">
            <img src={animeInfo.poster} alt="" height={250} width={180} />
        </div>
        <h1 className="text-2xl font-bold my-3">{animeInfo.name}</h1>
        <div className="flex text-sm my-3">
            <p className="bg-[#FFFFFF] border rounded-l border-black px-1 text-black">
                {animeInfo.stats?.rating}
            </p>
            <p className="bg-green-400 border border-black px-1 text-black">
                {animeInfo.stats?.quality}
            </p>
            
            <p className="bg-green-400 border rounded-r border-black px-1 text-black">
                {animeInfo.stats?.type}
            </p>
            <span className="ml-2">&#x2022;</span>
            <p className="mx-2">{animeInfo.stats?.duration}</p>
        </div>
        <div>
            <p>{animeInfo.description}</p>
        </div>
       
      </div>
    </div>
  );
};

export default WatchAnime;
