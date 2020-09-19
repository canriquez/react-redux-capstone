import React from 'react';

const CurrencyFilter = () => {
  const categories = [
    'USD',
    'EUR',
    'ARS',
    'YEN',
  ];

  return (

    <div className='currency-filter'>
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

export default CurrencyFilter;