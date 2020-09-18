import React from 'react';

const MainFilter = () => {
  const categories = [
    'Market Cap',
    'All Time High',
    'Volume',
  ];

  return (

    <div>
      <select className="categories">
        {
          categories.map((cat, id) => (
            <option key={`opt_${id * 2}`} value={id}>{cat}</option>
          ))
        }
      </select>
    </div>
  );
};

export default MainFilter;