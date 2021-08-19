let initialState = {
  priceForOne: 5,
  priceForTwo: 15,
  priceForFamily: 24,
};
export type InitialStateType = typeof initialState;

const cardReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZED_ONE':
      return {
        ...state,
        priceForOne: action.priceForOne,
      };
    case 'INITIALIZED_TWO':
      return {
        ...state,
        priceForTwo: action.priceForTwo,
      };
    case 'INITIALIZED_FAMILY':
      return {
        ...state,
        priceForFamily: action.priceForFamily,
      };
    default:
      return state;
  }
};

export const initializedPriceForOne = (priceForOne: number) =>
  ({
    type: 'INITIALIZED_ONE',
    priceForOne,
  } as const);
export const initializedPriceForTwo = (priceForTwo: number) =>
  ({
    type: 'INITIALIZED_TWO',
    priceForTwo,
  } as const);
export const initializedPriceForFamily = (priceForFamily: number) =>
  ({
    type: 'INITIALIZED_FAMILY',
    priceForFamily,
  } as const);

export default cardReducer;
