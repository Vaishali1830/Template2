import React from "react";

interface CardProps {
  image: string;
  title: string;
  content: string;
  btntext : string;
  textcolor? : string
}

export const ImageCard: React.FC<CardProps> = ({ image, title, content , btntext , textcolor}) => {
  return (
    <div className="w-[25vw] rounded-lg overflow-hidden shadow-lg border border-color bg-surface
      transform transition-transform duration-300 hover:-translate-y-2">
      <img className="w-full h-50 object-cover mb-3" src={image} alt={title} />
      <div className="p-4">
        <h2 className={`text-xl font-serif font-bold  mb-3 pl-2 ${textcolor ? textcolor : "text-primary"}`}>
          {title}
        </h2>
        <p className="text-primary text-sm mt-2 pl-2">{content}</p>
        <div className="flex justify-center">
          <button className="border-2 mt-6 border-lime-600 text-lime-700 py-2 w-30 rounded-lg  font-serif text-xs hover:bg-lime-600 hover:text-white transition-all duration-500">
            {btntext}
          </button>
        </div>
      </div>
    </div>
  );
};

