import React from "react";

function Banner() {
  return (
    <div className="-mb-32 relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10 px-6 rounded-lg shadow-lg mx-auto max-w-[1120px] h-[280px] text-center overflow-hidden">
      <div className="absolute bottom-11 -left-10 w-48 h-48 bg-yellow-400 transform -translate-x-1/2 translate-y-1/2 rotate-45"></div>
      <h2 className="relative text-3xl font-bold">
        Seeking <span className="text-yellow-400">Collaboration?</span>
      </h2>
      <p className="relative mt-4 text-lg">
        We constantly look forward to exploring ideas, collaborations, and
        technical innovations. If you want to partner with us, we are just an
        email away.
      </p>
      <button className="relative mt-6 bg-yellow-400 text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500">
        Let's Talk
      </button>
    </div>
  );
}

export default Banner;
