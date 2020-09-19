import { fetchApiCryptoList } from '../apis/coingecko';

it('it fetch from API, and returns a crypto list array', () => {
  expect.assertions(1);
  return expect(fetchApiCryptoList(null,'usd','market_cap_desc','5','1')).resolves.toBeInstanceOf(Array);
});

it('it fetch from API, and returns an array with 5 elements', () => {
  expect.assertions(1);
  return expect(fetchApiCryptoList(null,'usd','market_cap_desc','10','1')).resolves.toHaveLength(10);
});

it('it fetch from API, throws an error API url base', () => {
  expect.assertions(1);
  return expect(fetchApiCryptoList('https://api.coingecko.com/','usd','market_cap_desc','5','1')).resolves.toEqual({"error": "Not Found", "status": 404})
});

it('it fetch from API, throws an error API failed URL', () => {
  expect.assertions(1);
  return expect(fetchApiCryptoList('http://','usd','market_cap_desc','5','1')).rejects.toThrow('')
});
