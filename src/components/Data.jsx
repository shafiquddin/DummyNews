import React, { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";

const Data = ({ id, title, description, urlToImage, url }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div className="border-2 rounded-lg shadow-md p-4 m-4 bg-white hover:shadow-xl transition duration-300">
      <div className="flex justify-between cursor-pointer gap-1 "
      onClick={toggleExpand}
      //  onMouseEnter={()=>setExpanded(true)} onMouseLeave={()=>setExpanded(false)}
       >
        <h4 className="text-lg font-semibold">{title}</h4>
        <div className="text-gray-600">
          {expanded ? <FcCollapse size={24} /> : <FcExpand size={24} />}
        </div>
      </div>
      {expanded && (
        <div className="flex flex-col pt-2">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt={title} className="rounded-md hover:opacity-90 transition duration-300"/>
          </a>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Data;
