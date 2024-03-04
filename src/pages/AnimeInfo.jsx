import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AnimeInfo = () => {
    const {animeId} = useParams();

    // const {info, setInfo} = useState({});
    // const {moreInf, setMoreInfo} = useState({});

    const info = {
        "id": "jujutsu-kaisen-specials-18535",
        "name": "Jujutsu Kaisen: Specials",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/78d183cd4fe881d5b656c52053d73c77.jpg",
        "description": "Specials Jujutsu Kaisen",
        "stats": {
            "rating": "R",
            "quality": "HD",
            "episodes": {
                "sub": 2,
                "dub": null
            },
            "type": "Special",
            "duration": "22m"
        }
    };

    const moreInfo = {
        "japanese": "閑話前編",
        "aired": "Aug 10, 2023 to Aug 17, 2023",
        "premiered": "Summer 2023",
        "duration": "22m",
        "status": "Finished Airing",
        "malscore": "8.6",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Magic",
            "Shounen"
        ],
        "studios": "MAPPA",
        "producers": [
            "MAPPA"
        ]
    }

    useEffect(() => {
        // getAnimeInfo()
    }, [animeId])
    
    const getAnimeInfo = async() => {
        const resp = await fetch(`https://api-aniwatch.onrender.com/anime/info?id=${animeId}`);
        const data = await resp.json();
        const info = data.anime.info
        const moreInfo = data.anime.moreInfo
        // setInfo(info);
        // setMoreInfo(moreInfo);
    }
  return (
    <div className='flex justify-between bg-slate-400 text-white m-20'>
        <div>
            <img src={info.poster} alt="poster" />
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
                <button className='mr-5 bg-[#ffdd95] px-4 py-2 border border-[#ffdd95] rounded-full text-black '>Watch Now</button>
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
