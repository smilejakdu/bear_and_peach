import produce from "../utils/produce"

export const initialState ={
  mainProducts:[],
  loadProductsLoading : false,
  loadProductsDone : false,
  loadProductsError:null,
  hasMoreProducts:true,
}

export const LOAD_PRODUCTS_REQUEST = 'LOAD_PRODUCTS_REQUEST';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_FAILURE = 'LOAD_PRODUCTS_FAILURE';

const reducer = (state = initialState , action)=>produce(state , (draft)=>{
  switch (action.type) {
    case LOAD_PRODUCTS_REQUEST:
      console.log(2);
      draft.loadProductsLoading = true;
      draft.loadProductsDone = false;
      draft.loadProductsError = null;
      break;
    case LOAD_PRODUCTS_SUCCESS:
      console.log(3);
      draft.loadProductsLoading = false;
      draft.loadProductsDone = true;
      draft.mainProducts = draft.mainProducts.concat(action.data);
      break;
    case LOAD_PRODUCTS_FAILURE:
      draft.loadProductsLoading = false;
      draft.loadProductsError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;