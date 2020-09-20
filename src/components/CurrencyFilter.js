import React from 'react';

const CurrencyFilter = ({
  state,
  updateApiAssetsLists
}) => {
  const categories = [
    'USD',
    'EUR',
    'ARS',
    'YEN',
  ];

  const handleChange = (e) => {
    const conf = {
      url: null,
      currency: e.target.value,
      filter: state.mainFilter,
      results: '200',
      page: '1'
    }
  }

  return (

    <div className='currency-filter'>
      <select className="categories" onChange={handleChange}>
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