import { 
    ORDER_ADD_ITEM, 
    ORDER_REMOVE_ITEM, 
    ORDER_CLEAR 
} from "../constants/orderConstants";

export const clearOrder = async (dispatch) => {
  return dispatch({
    type: ORDER_CLEAR,
  });
};

export const addToOrder = async (dispatch, item) => {
  return dispatch({
    type: ORDER_ADD_ITEM,
    payload: item,
  });
};

export const removeFromOrder = async (dispatch, item) => {
  return dispatch({
    type: ORDER_REMOVE_ITEM,
    payload: item,
  });
};


