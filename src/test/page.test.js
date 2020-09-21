import deepFreeze from 'deep-freeze';
import page from '../reducers/page';
import { NEXT_PAGE, PREV_PAGE } from '../helpers/help';
import { nextPage, prevPage, updatePage } from '../actions/index';

it('increases page number, happy path', () => {
  const stateBefore = 0;

  const stateAfter = 1;

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(nextPage); // makes sure reducer is pure function

  expect(
    page(stateBefore, nextPage()),
  ).toEqual(stateAfter);
});

it('test not going above 40, ', () => {
  const stateBefore = 40;

  const stateAfter = 40;

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(nextPage); // makes sure reducer is pure function

  expect(
    page(stateBefore, nextPage()),
  ).toEqual(stateAfter);
});

it('go to prev page happy path', () => {
  const stateBefore = 2;

  const stateAfter = 1;

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(nextPage); // makes sure reducer is pure function

  expect(
    page(stateBefore, prevPage()),
  ).toEqual(stateAfter);
});

it('test not going below one, ', () => {
  const stateBefore = 1;

  const stateAfter = 1;

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(nextPage); // makes sure reducer is pure function

  expect(
    page(stateBefore, prevPage()),
  ).toEqual(stateAfter);
});

it.only('changes to a specific page number, ', () => {
  const stateBefore = 20;
  const newPage = 10;
  const stateAfter = 10;

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(nextPage); // makes sure reducer is pure function

  expect(
    page(stateBefore, updatePage(newPage)),
  ).toEqual(stateAfter);
});
