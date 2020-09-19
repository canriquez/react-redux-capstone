import 'regenerator-runtime';

const fetchApiCryptoList = async (
    currency,
    filter,
    results,
    page
    ) => {
  const baseUrl = 'https://api.coingecko.com/api/v3/coins/markets?';
  const a =  'vs_currency='+currency;
  const b =  '&order='+filter;
  const c = '&per_page='+results;
  const d = '&page='+page+'&sparkline=false';
  const appURL = [baseUrl + a + b + c +d];
  const request = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(appURL, request);
    const obj = await response.json();

    // return complete list
    return obj;
  } catch (err) {
    throw ('Something went wrong with fetching book list ', err);
  }
};

export { fetchApiCryptoList };