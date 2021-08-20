// import { InferActionsTypes } from './redux-store';

let initialState = {
  page: 'users',
};
export type InitialStateType = typeof initialState;

const ajaxReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZED_RESPONSE': {
      return {
        ...state,
        page: action.page,
      };
    }

    default:
      return state;
  }
};

export const responseServer = (page: string) =>
  ({
    type: 'INITIALIZED_RESPONSE',
    page,
  } as const);

export default ajaxReducer;
