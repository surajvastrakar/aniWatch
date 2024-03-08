import React from "react";

const Trending = ({ trendingData }) => {
  return (
    <div className="mt-16">
      <h2 className="text-[#FFDD95] text-2xl font-bold ml-4 mb-12">Trending</h2>
      <div className="flex gap-6">
        {trendingData.map((trending) => (
          <div className="flex" key={trending.name}>
            <div className="h-[150px] items-center relative w-9">
              <h3
                className="rotate-180 overflow-hidden absolute bottom-8 text-nowrap"
                style={{ writingMode: "vertical-lr" }}
              >
                {trending.name.length > 10
                  ? `${trending.name.substring(0, 10)}...`
                  : trending.name}
              </h3>
              <p className="text-[#FFDD95] text-lg font-bold absolute bottom-0 m-auto">
                {trending.rank < 9 ? 0 : ""}
                {trending.rank}
              </p>
            </div>
            <div>
              <img src={trending.poster} alt="" className="h-[150px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
