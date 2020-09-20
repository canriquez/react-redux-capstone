import deepFreeze from 'deep-freeze';
import currencyFilter from '../reducers/currencyFilter';
import { currencyUpdate } from '../actions/index'

it.only('update currency to new filtered currency', () => {
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