import React from 'react';

const CurrencyFilter = ({
  state,
  changeCurrencyFilter,
}) => {
  const categories = [
    {
      key: 'US Dollars',
      api: 'usd',
    },
    {
      key: 'Euros',
      api: 'eur',
    },
    {
      key: 'Argentinean Peso',
      api: 'ars',
    },
  ];

  const handleChange = e => {
    changeCurrencyFilter(e.target.value);
  };

  return (

    <div className="currency-filter">
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

export default CurrencyFilter;
