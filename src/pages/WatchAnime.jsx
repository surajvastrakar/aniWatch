import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

const WatchAnime = () => {
    const {animeId} = useParams();
    const [watchData, setWatchData] = useState([]);
    const [totalEpisodes, setTotalEpisodes] = useState(null)

    useEffect(() => {
        getAnimeEpisodes()
    },[animeId]);

    const getAnimeEpisodes = async() => {
        const resp = await fetch(
            `https://api-aniwatch.onrender.com/anime/episodes/${animeId}`
          );
          const data = await resp.json();
          const tempData = data.episodes;
          const total = data.totalEpisodes
          setWatchData(tempData);
          setTotalEpisodes(total);
          console.log(watchData);
    }

    const getWatchLink = async(epId) => {
        console.log(epId, 'epId');
        const resp = await fetch(
            `https://api-aniwatch.onrender.com/anime/episode-srcs?id=${epId}&server=vidstreaming&category=dub`
          );
          const data = await resp.json();
          console.log(data);
    }

  return (
    <div className='flex justify-around'>
      <div>
        <h3>List of episodes:</h3>
        <ul>
            {
                watchData.map(ep => 
                    (
                        <li className='flex gap-2' onClick={() => getWatchLink(ep.episodeId)}>
                            <p>{ep.number}</p>
                            <p>{ep.title}</p>
                        </li>
                    )
                )
            }
        </ul>
      </div>
      <div>
        <iframe src="" frameborder="0"></iframe>
      </div>
      <div></div>
    </div>
  )
}

export default WatchAnime
