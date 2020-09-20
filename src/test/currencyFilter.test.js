import deepFreeze from 'deep-freeze';
import currencyFilter from '../reducers/currencyFilter';
import { currencyUpdate, getCurrenCurrency } from '../actions/index'

it('update currency to new filtered currency', () => {
  const stateBefore = '';

  const filter = 'eur'
  const stateAfter = 'eur';

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(currencyUpdate); // makes sure reducer is pure function

  expect(
    currencyFilter(stateBefore, currencyUpdate(filter)),
  ).toEqual(stateAfter);
});

it('get current reduxs store currency', () => {
  const stateBefore = 'ars';
  const stateAfter = 'ars';

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(getCurrenCurrency); // makes sure reducer is pure function

  expect(
    currencyFilter(stateBefore, getCurrenCurrency()),
  ).toEqual(stateAfter);
});