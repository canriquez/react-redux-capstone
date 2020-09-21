import { fetchApiCryptoList } from '../apis/coingecko';

const initialConf = {
  url: null,
  currency: 'usd',
  filter: 'market_cap_desc',
  results: '200',
  page: '1',
};
const errorCallConf = {
  url: 'https://api.coingecko.com/',
  currency: 'usd',
  filter: 'market_cap_desc',
  results: '200',
  page: '1',
};

const wrongUrlConf = {
  url: 'https://',
  currency: 'usd',
  filter: 'market_cap_desc',
  results: '200',
  page: '1',
};

it('it fetch from API, and returns a crypto list array', () => {
  expect.assertions(1);
  return expect(fetchApiCryptoList(initialConf)).resolves.toBeInstanceOf(Array);
});

it('it fetch from API, and returns an array with 5 elements', () => {
  expect.assertions(1);
  return expect(fetchApiCryptoList(initialConf)).resolves.toHaveLength(200);
});

it('it fetch from API, throws an error API url base', () => {
  expect.assertions(1);
  return expect(fetchApiCryptoList(errorCallConf)).resolves.toEqual({ error: 'Not Found', status: 404 });
});

it('it fetch from API, throws an error API failed URL', () => {
  expect.assertions(1);
  return expect(fetchApiCryptoList(wrongUrlConf)).rejects.toThrow('');
});
