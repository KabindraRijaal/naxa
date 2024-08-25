import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../reducer/store";
import { fetchDataRequest } from "../reducer/reducers/dataReducer";
import { Outlet } from "react-router-dom";

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
            
          </div>
        </div>
      </main>
    );
  }

  if (error) return <p>Error: {error}</p>;
  return (
    
    <>
    <main className="flex-grow bg-gray-100">
      <div className="container h-[407px] mx-auto px-4 py-8 md:py-16 text-center">
        <h2 className="text-xl  font-bold mb-4 md:mb-8 text-yellow-400 md:text-black">
          PORTFOLIO
        </h2>
        <h1 className="text-4xl  font-normal  mb-8">
          Diverse, <span className="text-blue-600">Impactful,</span>
          <br className="md:hidden" /> and Reliable.
        </h1>
       
      </div>
    </main>
    </>
  );
}

export default MainBody;
