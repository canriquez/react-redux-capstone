import React from 'react';

const CurrencyFilter = ({
  state,
  updateApiAssetsLists
}) => {
  const categories = [
    {
      key: 'US Dollars',
      api: 'usd'
    },
    {
      key: 'Euros',
      api: 'eur'
    },
    {
      key: 'Argentinean Peso',
      api: 'ars'
    },
  ];

  const handleChange = (e) => {
    const conf = {
      url: null,
      currency: e.target.value,
      page: '1'
    }
    //this will promote the call to Dashboard and 
    // dispatch the assetlist API update
    updateApiAssetsLists(conf);
  }

  return (

    <div className='currency-filter'>
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