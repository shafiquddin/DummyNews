import React, { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";

const Data = ({ id, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div className="border-2 rounded-lg shadow-md p-4 m-4">
      <div className="flex justify-between cursor-pointer" onClick={toggleExpand}>
        <h4 className="text-lg font-semibold">{title}</h4>
        <div className="text-gray-600">
          {expanded ? <FcCollapse size={24} /> : <FcExpand size={24} />}
        </div>
      </div>
      {expanded && (
        <p className="mt-2 text-sm text-gray-700">{description}</p>
      )}
    </div>
  );
};

export default Data;
