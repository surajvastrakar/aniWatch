import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import animeContext from "../context/AnimeContext";
import playIcon from "../assets/play_icon.svg";

const AnimeInfo = () => {
  const { animeId } = useParams();

  const [info, setInfo] = useState({});
  const [moreInfo, setMoreInfo] = useState({});

  const { setAnimeInfo } = useContext(animeContext);

  useEffect(() => {
    getAnimeInfo();
  }, [animeId]);

  const getAnimeInfo = async () => {
    const resp = await fetch(
      `https://api-aniwatch.onrender.com/anime/info?id=${animeId}`
    );
    const data = await resp.json();
    const info = data.anime.info;
    const moreInfo = data.anime.moreInfo;
    setInfo(info);
    setAnimeInfo(info);
    setMoreInfo(moreInfo);
    console.log(info, "info");
  };
  return (
    <div className="flex bg-[#242428] text-white">
      <div className="w-[300px] ps-5 pt-10">
        <img src={info?.poster} alt="poster" className="w-full" />
      </div>
      <div className="p-8 w-full">
        <div>
          <span className="px-2">{info?.stats?.type}</span>
          <span>&#x2022;</span>
          <span className="px-2 text-[#aaa]"> {info?.name}</span>
        </div>
        <h2 className="text-[40px] font-bold my-4">{info?.name}</h2>
        <div className="flex justify-start text-sm">
          <p className="bg-white border rounded-l border-black px-2 text-black">
            {info?.stats?.rating}
          </p>
          <p className="bg-green-600 border border-black px-2 text-black">
            {info?.stats?.quality}
          </p>
          <p className="bg-green-400 border border-black  px-2 text-black">
            {info?.stats?.episodes?.sub}
          </p>
          <p className="mx-4">
            <span className="mr-2">&#x2022;</span>
            {info?.stats?.type}
          </p>
          <span className="mr-2">&#x2022;</span>
          <p>{info?.stats?.duration}</p>
        </div>
        <div className="mt-10 flex">
          <Link to={`/watch-anime/${info?.id}`}>
            <button className="mr-5 bg-[#ffdd95] px-4 py-2 border border-[#ffdd95] rounded-full text-black flex text-center items-center">
              <img
                src={playIcon}
                alt=""
                height={12}
                className="h-[12px] pr-2"
              />
              Watch Now
            </button>
          </Link>
        </div>
        <div className="my-8">
          <p className="my-4">{info?.description}</p>
          <p>
            {`Aniwatch is the best site to watch ${info?.name} online, or you can even watch ${info?.name} DUB in HD quality.
                    You can also find MAPPA anime on AniWatch website.`}
          </p>
        </div>
      </div>
      <div className="bg-slate-600 w-[500px] px-10 py-28 text-sm space-y-3">
        <p>
          <b>Japanese:</b> {moreInfo?.japanese}
        </p>
        <p>
          <b>Aired:</b> {moreInfo?.aired}
        </p>
        <p>
          <b></b> {moreInfo?.premiered}
        </p>
        <p>
          <b>Duration:</b> {moreInfo?.duration}
        </p>
        <p>
          <b>Staus:</b> {moreInfo?.status}
        </p>
        <p>
          <b>MAL Score:</b> {moreInfo?.malscore}
        </p>
        <div className="">
            <div className="flex flex-wrap items-center">
                <b>Genres:</b>
                {
                    moreInfo?.genres?.map((name) => 
                        (
                            <p key={name} className="px-2 border rounded-full m-1 border-[rgba(255,255,255,0.4)]">{name}</p>
                        )
                    )
                }
            </div>
        </div>
        <p>Studios: {moreInfo?.studios ?? 'N/A'}</p>
        <p>
            <b>Producers:</b>
            {
                moreInfo?.producers?.map((name) => 
                    (
                        <span key={name}>{name},</span>
                    )
                )
            }
        </p>
      </div>
    </div>
  );
};

export default AnimeInfo;
