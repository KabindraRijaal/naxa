import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/store";
import { ProjectCard } from "../ProjectCard";

export const SurveyingAndGis = () => {
  const { loading, surveyData } = useSelector(
    (state: RootState) => state.portfolioData
  );
  if (loading)
    return (
      <div className="container mx-auto max-w-[1270px] px-4 flex flex-col mt-28 animate-pulse">
        <div className="mb-12 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row bg-gray-200 h-64 mb-8 rounded-lg overflow-hidden"
          >
            <div className="lg:w-1/2 bg-gray-300"></div>
            <div className="lg:w-1/2 p-4 space-y-2">
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        ))}
      </div>
    );
  return (
    <div className="container mx-auto max-w-[1270px] px-4 flex flex-col mt-28">
      <p className="mb-12">
        The company has advocated for the significance of geodata in better
        planning and analysis. This includes series of map literacy training,
        GIS mapping training and also crowdmapping sessions that the company has
        voluntarily engaged in. One of the primary objectives of the company has
        been to promote the use of digital maps. So, the team has gained good
        experience in leading trainings, advocacy sessions and technical
        engagement around the same.
      </p>
      {surveyData.length > 0 &&
        surveyData.map((item: any) => {
          return (
            <div className="py-1">
              <ProjectCard
                focus_area={item.focus_area}
                image={item.photo}
                title={item.title}
                description={item.description}
                subtitle={item.subtitle}
                client={item.clients}
                period={item.start_date + " - " + item.end_date}
              />
            </div>
          );
        })}
    </div>
  );
};
