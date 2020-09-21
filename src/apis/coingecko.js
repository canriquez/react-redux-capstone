import 'regenerator-runtime';

const fetchApiCryptoList = async ({
  url,
  currency,
}) => {
  console.log(`From API, currency in call is : ${currency}`);
  const baseUrl = url || 'https://api.coingecko.com/api/v3/coins/markets?';
  const a = `vs_currency=${currency}`;
  const b = '&order=market_cap_desc';
  const c = '&per_page=200';
  const d = '&page=1&sparkline=false';
  const appURL = [baseUrl + a + b + c + d];
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

export default fetchApiCryptoList;
