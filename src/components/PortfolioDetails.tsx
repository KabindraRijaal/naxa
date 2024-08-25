import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducer/store";
import { Modal } from "./portfolio/Modal";

const Card = ({
  title,
  clients,
  start_date,
  end_date,
  subtitle,
  photo,
  setIsModalOpen,
}: any) => {
  return (
    <div
      className="flex flex-col overflow-hidden shadow-lg bg-white h-full"
      onClick={() => setIsModalOpen(true)}
    >
      <div className="flex-1 p-6 bg-blue-600 text-white">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-4">{subtitle}</p>
        <div className="flex flex-col md:flex-row justify-between gap-2 text-[13px] font-semibold">
          <p className="mt-6 ">
            <strong className="text-yellow-500">Client</strong>
            <br />
            {clients}
          </p>
          <p className="mt-6">
            <strong className="text-yellow-500">Time Duration</strong>
            <br />
            {start_date} - {end_date}
          </p>
        </div>
      </div>
      <img src={photo} alt="Project" className="" />
      
    </div>
  );
};

const PortfolioDetails = () => {
  const { keyHighlightData } = useSelector(
    (state: RootState) => state.portfolioData
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const handleCardClick = (card: any) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto py-48">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
        {keyHighlightData.length > 0 &&
          keyHighlightData.map((card: any, index: any) => (
            <div
              key={index}
              className="mb-8 w-[375px] h-[717px] xl:w-[620px] xl:h-[730px]"
              onClick={() => handleCardClick(card)}
            >
              <Card {...card} />
            </div>
          ))}
      </div>
      {isModalOpen && selectedCard && (
        <Modal
          focus={selectedCard.focus_area}
          image={selectedCard.photo}
          title={selectedCard.title}
          description={selectedCard.description}
          client={selectedCard.clients}
          period={selectedCard.start_date + " - " + selectedCard.end_date}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default PortfolioDetails;

