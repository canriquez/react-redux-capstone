import React from 'react';

const MainFilter = () => {
  const categories = [
    {
      key:'Market Cap',
      api:'market_cap'
    },
    {
      key:'All Time High',
      api:'ath'
    },
    {
      key:'Price Change 24hs',
      api:'price_change_24h'
    },
  ];

  return (

    <div className='main-filter'>
      <select className="categories">
        {
          categories.map((cat, id) => (
            <option key={`opt_${id * 2}`} value={cat.api}>{cat.key}</option>
          ))
        }
      </select>
    </div>
  );
};

export default MainFilter;