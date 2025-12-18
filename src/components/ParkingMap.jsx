import { useState } from "react";

export default function ParkingMap() {
  const [isOpen, setIsOpen] = useState(false);

  const locations = ["CCD Parking", "Beach Road", "Beypore"];

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] mt-2 rounded-xl border-[3px] border-black overflow-hidden shadow-sm bg-gray-100">
      <div
        className={`absolute top-4 left-4 z-[400] bg-white border-[2.5px] border-black rounded-lg shadow-sm overflow-hidden transition-all duration-300 ease-in-out flex flex-col ${
          isOpen ? "max-h-64 w-48" : "max-h-[38px] w-32"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-1.5 bg-white hover:bg-gray-50 transition-colors"
        >
          <span className="font-bold text-sm">Locations</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className={`w-4 h-4 ml-2 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        <div className="flex flex-col px-1 pb-2">
          {locations.map((loc, index) => (
            <button
              key={index}
              className="text-left px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => {
                console.log(`Selected: ${loc}`);
              }}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      {/* placeholder need to put map here */}
      <div className="w-full h-full flex items-center justify-center bg-gray-200">
        <p className="text-gray-500 font-semibold">Map Loading...</p>
      </div>
    </div>
  );
}
