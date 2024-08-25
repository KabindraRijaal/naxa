import React, { useState } from 'react';
import { Modal } from './portfolio/Modal';

export const ProjectCard = ({
  image,
  title,
  description,
  client,
  period,
  subtitle,
  focus_area
}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-200 overflow-hidden mb-8 hover:bg-white hover:shadow-slate-400 hover:shadow-md hover:cursor-pointer transition-all duration-300 ease-in-out" onClick={() => setIsModalOpen(true)}>
        <div className="flex justify-center items-center h-[250px] w-[416px] overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-fill" />
        </div>
        <div className="lg:w-4/5 p-6 flex flex-col justify-start">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-wrap">
              {title}
            </h2>
            <p className="text-gray-600 mb-4">{subtitle}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-yellow-500">Client: </span><br />
              {client}
            </div>
            <div className="text-sm text-gray-500 mt-4">
              <span className="font-semibold text-yellow-500">Project Period: </span><br />
              {period}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          focus={focus_area}
          image={image}
          title={title}
          description={description}
          client={client}
          period={period}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};
