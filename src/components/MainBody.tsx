import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../reducer/store";
import { fetchDataRequest } from "../reducer/reducers/dataReducer";

function MainBody() {
  const dispatch = useDispatch();
  const { data, loading, error, categoryTitle } = useSelector(
    (state: RootState) => state.portfolioData
  );
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);
  if (loading) {
    return (
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-16 text-center">
          <div className="h-6 w-32 mb-4 md:mb-8 bg-gray-300 animate-pulse mx-auto"></div>
          <div className="h-10 w-72 mb-8 bg-gray-300 animate-pulse mx-auto"></div>
          <div className="mt-8 md:mt-16 flex justify-center items-center">
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
        </div>
      </main>
    );
  }

  if (error) return <p>Error: {error}</p>;
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-8 md:py-16 text-center">
        <h2 className="text-xl  font-bold mb-4 md:mb-8 text-yellow-400 md:text-black">
          PORTFOLIO
        </h2>
        <h1 className="text-4xl  font-normal  mb-8">
          Diverse, <span className="text-blue-600">Impactful,</span>
          <br className="md:hidden" /> and Reliable.
        </h1>

        {/* Portfolio Categories */}
        <div className="mt-8 md:mt-16 flex justify-center items-center ">
          <div className="flex flex-wrap  justify-between h-[116.75px] w-[1070px] px-[30px] py-[10px] grid-cols-2 p-6 bg-white shadow-lg rounded-lg text-xs md:text-[.785rem]">
            <div className="w-[181.8px] h-[48.3px] font-semibold flex items-center">
              <a
                href=""
                className="bg-yellow-400 px-2 py-[5.200px] text-left transition-colors duration-300 ease-in-out hover:bg-yellow-400 hover:text-black"
              >
                Key Highlights
              </a>
            </div>
            {categoryTitle.length > 0 &&
              categoryTitle.map((title, index) => (
                <div
                  className="text-gray-600 w-[181.8px] h-[48.3px] flex items-center"
                  key={index}
                >
                  <a
                    href=""
                    className="px-2 py-[5.200px] text-left transition-colors duration-300 ease-in-out hover:bg-yellow-400 hover:text-black"
                  >
                    {title}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainBody;
