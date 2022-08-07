import { createReducer, on } from '@ngrx/store';
import { decrement, divide, increment, multiply } from './counter.actions';


export const initialState = 10;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state) => state * 2),
  on(divide, (state) => state / 2)
);
