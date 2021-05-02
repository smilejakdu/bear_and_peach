import produce from '../utils/produce';

export const initialState = {
  mainCarts: [],
  loadCartsLoading: false,
  loadCartsDone: false,
  loadCartsError: null,
  hasMoreCarts: true,
};

export const LOAD_CARTS_REQUEST = 'LOAD_CARTS_REQUEST';
export const LOAD_CARTS_SUCCESS = 'LOAD_CARTS_SUCCESS';
export const LOAD_CARTS_FAILURE = 'LOAD_CARTS_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_CARTS_REQUEST:
        draft.loadCartsLoading = true;
        draft.loadCartsDone = false;
        draft.loadCartsError = null;
        break;
      case LOAD_CARTS_SUCCESS:
        draft.loadCartsLoading = false;
        draft.loadCartsDone = true;
        draft.mainCarts = draft.mainCarts.concat(action.data);
        break;
      case LOAD_CARTS_FAILURE:
        draft.loadCartsLoading = false;
        draft.loadCartsError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
