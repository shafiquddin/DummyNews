import React, { useEffect, useState } from "react";
import Data from "./components/Data";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://news-ebeb3-default-rtdb.firebaseio.com/article.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setApiData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id) => {
    // Toggle expanded state for the clicked card and collapse others
    const updatedData = apiData.map(item =>
      item.id === id ? { ...item, expanded: !item.expanded } : { ...item, expanded: false }
    );
    setApiData(updatedData);
  };

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-600">Error: {error}</div>;
  }

  return (
    <>
    <div className="bg-blue-700 p-8 shadow-md flex " >
      <h1 className="text-3xl font-bold text-white text-center">Explore Our Latest News</h1>
    </div>    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
      {apiData.map((item,index) => (
        <Data
          key={index}
          id={index}  
          {...item}
          expanded={item.expanded || false}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
    </>
   
  );
};

export default App;
