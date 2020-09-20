import React from 'react';

const MainFilter = ({
  changeMainFilter
}) => {
  const categories = [
    {
      key: 'Market Cap',
      api: 'market_cap'
    },
    {
      key: 'Circulating Supply',
      api: 'circulating_supply'
    },
    {
      key: '24h change vs ATH%',
      api: 'ath_change_percentage'
    },
  ];

  const handleChange = e => {
    console.log('filter selector is : ' + e.target.value)
    changeMainFilter(e.target.value)
  }

  return (

    <div className='main-filter'>
      <select className="categories" onChange={handleChange}>
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