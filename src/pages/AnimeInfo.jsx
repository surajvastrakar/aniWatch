import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

const AnimeInfo = () => {
    const {animeId} = useParams();

    const [info, setInfo] = useState({});
    const [moreInfo, setMoreInfo] = useState({});

    useEffect(() => {
        console.log('mount');
        getAnimeInfo()
    }, [animeId])
    
    const getAnimeInfo = async() => {
        const resp = await fetch(`https://api-aniwatch.onrender.com/anime/info?id=${animeId}`);
        const data = await resp.json();
        const info = data.anime.info
        const moreInfo = data.anime.moreInfo
        setInfo(info);
        setMoreInfo(moreInfo);
        console.log(info, 'info');
    }
  return (
    <div className='flex justify-between bg-[#616164] text-white m-20'>
        <div>
            <img src={info.poster} alt="poster" className='h-[200px] max-w-[140px]' />
        </div>
        <div className='m-8'> 
            <div>
                <span className='px-2'>{info.stats.type}</span>
                <span className='px-2'>{info.name}</span>
            </div>
            <h2 className='text-[40px] font-bold my-4'>{info.name}</h2>
            <div className='flex justify-start'>
                <p className='bg-white border rounded-l border-black  px-2 text-black'>{info.stats.rating}</p>
                <p className='bg-green-600 border border-black px-2 text-black'>{info.stats.quality}</p>
                <p className='bg-green-400 border rounded-r border-black  px-2 text-black'>{info.stats.episodes.sub}</p>
                <p className='mx-4'>{info.stats.type}</p>
                <p>{info.stats.duration}</p>
            </div>
            <div className='mt-10'>
                <Link to={`/watch-anime/${info.id}`}>
                    <button className='mr-5 bg-[#ffdd95] px-4 py-2 border border-[#ffdd95] rounded-full text-black '>Watch Now</button>
                </Link>
            </div>
            <div className='my-2'>
                <p className='my-2'>{info.description}</p>
                <p>{`Aniwatch is the best site to watch ${info.name} online, or you can even watch ${info.name} DUB in HD quality.
                    You can also find MAPPA anime on AniWatch website.`}
                </p>
            </div>
        </div>
        <div className="bg-slate-600">
            <p>Japanese: {moreInfo.japanese}</p>
            <p>Aired: {moreInfo.aired}</p>
            <p>Premired: {moreInfo.premiered}</p>
            <p>Duration: {moreInfo.duration}</p>
            <p>Staus: {moreInfo.status}</p>
            <p>MAL Score: {moreInfo.malscore}</p>
            <div>
                <p>Genres:</p>
            </div>
            <p>Studios: {moreInfo.studios}</p>
            <p>Producers: {moreInfo.producers[0]}</p>
        </div>
    </div>
  )
}

export default AnimeInfo
