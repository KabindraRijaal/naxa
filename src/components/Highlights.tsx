import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducer/store";
import { Link, Outlet } from "react-router-dom";
import Banner from "./Banner";

function Highlights() {
  const { data, loading, error, categoryTitle } = useSelector(
    (state: RootState) => state.portfolioData
  );
  if (loading)
    return (
      <div className="-mt-8 flex justify-center items-center ">
        <div className="flex flex-wrap justify-between h-[116.75px] w-[1070px] px-[30px] py-[10px] grid-cols-2 p-6 bg-white shadow-lg rounded-lg">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="w-[178.8px] h-[45.3px] bg-gray-300 animate-pulse rounded-lg flex items-center"
            >
              <div className="w-full h-full px-2 py-[5.2px] bg-gray-300"></div>
            </div>
          ))}
        </div>
      </div>
    );
  return (
    <>
      <div className="-mt-8 flex justify-center items-center ">
        <div className="flex flex-col sm:flex-row flex-wrap  justify-between lg:w-[1070px] lg:h-[116.75px] xl:h-[144.45px] xl:w-[1270px] px-[30px] py-[10px] grid-cols-2 p-6 bg-white shadow-lg text-xs md:text-[.785rem]">
          <div className=" lg:w-[181.8px] lg:h-[48.3px] xl:w-[217.8px] xl:h-[67.22px] font-semibold flex items-center">
            <Link
              to="/"
              className="bg-yellow-400 w-full xl:text-[1rem] px-2 py-[5.200px] text-left transition-colors duration-300 ease-in-out hover:bg-yellow-400 hover:text-black"
            >
              Key Highlights
            </Link>
          </div>
          {categoryTitle.length > 0 &&
            categoryTitle.map((title, index) => {
              const formattedTitle = title.toLowerCase().replace(/\s+/g, "");
              return (
                <div
                  className="text-gray-600 lg:w-[181.8px] lg:h-[48.3px] xl:w-[217.8px] xl:h-[67.22px] flex items-center transition-colors duration-300 ease-in-out hover:bg-yellow-400 hover:text-blue-600"
                  key={index}
                >
                  <Link
                    to={`/${formattedTitle}`}
                    className="px-2 py-[5.200px] xl:text-[1rem] xl:font-semibold text-left "
                  >
                    {title}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <Outlet />
      <Banner />
    </>
  );
}

export default Highlights;
