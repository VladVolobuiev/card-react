import { combineReducers, createStore } from 'redux';
import cardReducer from './card-reducer';

let reducers = combineReducers({
  card: cardReducer,
});
type ReducersType = typeof reducers;
export type PrimeStateType = ReturnType<ReducersType>;

const store = createStore(reducers);

export default store;
