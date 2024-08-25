import React, { useEffect, useRef } from "react";

export const Modal = ({
  image,
  title,
  description,
  client,
  period,
  focus,
  setIsModalOpen,
}: {
  image: string;
  title: string;
  description: string;
  client: string;
  period: string;
  focus: string;
  setIsModalOpen: (isOpen: boolean) => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="relative bg-white rounded-lg h-[596px] md:w-[1000px] overflow-y-auto"
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-tl-lg md:rounded-bl-lg"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-500">
              <div>
                <span className="font-semibold text-yellow-500">Client: </span>
                {client}
              </div>
              <div>
                <span className="font-semibold text-yellow-500">
                  Project Period:{" "}
                </span>
                {period}
              </div>
              <div>
                <span className="font-semibold text-yellow-500">Focus Area: </span>
                {Array.isArray(focus) && focus.length > 0
                  ? focus.map((item: string, index: number) => (
                      <span key={index} className="text-gray-500 ml-1">
                        {item}
                        {index < focus.length - 1 ? ", " : ""}
                      </span>
                    ))
                  : focus}
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </div>
  );
};
