import deepFreeze from 'deep-freeze';
import page from '../reducers/page';
import { NEXT_PAGE, PREV_PAGE } from '../helpers/help'
import { nextPage, prevPage } from '../actions/index'

it('increases page number, happy path', () => {
  const stateBefore = 0;

  const stateAfter =  1;

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(nextPage); // makes sure reducer is pure function

  expect(
    page(stateBefore, nextPage()),
  ).toEqual(stateAfter);
});

it('test not going above 40, ', () => {
  const stateBefore = 40;

  const stateAfter =  40;

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(nextPage); // makes sure reducer is pure function

  expect(
    page(stateBefore, nextPage()),
  ).toEqual(stateAfter);
});

it('go to prev page happy path', () => {
  const stateBefore = 1;

  const stateAfter =  0;

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(nextPage); // makes sure reducer is pure function

  expect(
    page(stateBefore, prevPage()),
  ).toEqual(stateAfter);
});

it('test not going below cero, ', () => {
  const stateBefore = 0;

  const stateAfter =  0;

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(nextPage); // makes sure reducer is pure function

  expect(
    page(stateBefore, prevPage()),
  ).toEqual(stateAfter);
});