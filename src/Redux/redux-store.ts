import { applyMiddleware, combineReducers, createStore } from 'redux';
import cardReducer from './card-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  card: cardReducer,
});
type ReducersType = typeof reducers;
export type PrimeStateType = ReturnType<ReducersType>;
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>;

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

export default store;
