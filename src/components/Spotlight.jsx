import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../src/assets/style.css";
import playIcon from "../assets/play_icon.svg"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Spotlight = ({ spotlights }) => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {spotlights.map((spotlight) => (
          <div className="" key={spotlight?.name}>
            <SwiperSlide className="text-white" key={spotlight?.name}>
              <div
                className="h-[600px] bg-cover w-full bg-no-repeat relative"
                style={{ backgroundImage: `url(${spotlight?.poster})` }}
              >
                <div className="left-0 text-left px-20 absolute inset-0 bg-[#00000097]">
                  <div className="w-1/2">
                    <p className="text-[#FFDD95] text-lg my-6">
                      #{spotlight?.rank} Spotlight
                    </p>
                    <h2 className="text-5xl my-6 font-bold">
                      {spotlight?.name}
                    </h2>
                    <div className="flex gap-4 my-6 font-medium">
                      {spotlight?.otherInfo?.map((info, i) => (
                        <p
                          key={`${i}-key`}
                          className={
                            i == spotlight?.otherInfo?.length - 1
                              ? "bg-green-400 border rounded px-2 text-black"
                              : ""
                          }
                        >
                          {info}
                        </p>
                      ))}
                    </div>
                    <article className="my-6">
                      {spotlight?.description?.length > 250
                        ? `${spotlight.description.substring(0, 250)}...`
                        : spotlight?.description}
                    </article>
                    <div className="flex">
                      <Link to={`/anime-info/${spotlight?.id}`}>
                        <button className="mr-5 bg-[#ffdd95] px-4 py-2 border border-[#ffdd95] rounded-full text-black flex text-center items-center">
                          <img src={playIcon} alt="" height={12} className="!h-[12px] !w-5 pr-2" />
                          Watch Now
                        </button>
                      </Link>
                      <button className="ml-5 bg-[#56565b] px-4 py-2 border border-[#56565b] rounded-full text-white">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <img src={spotlight.poster} alt="poster" /> */}
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Spotlight;
