import { ORDER_SET_TYPE } from "../constants/orderConstants";

export const setOrderType = async (dispatch, orderType) => {
  return dispatch({
    type: ORDER_SET_TYPE,
    payload: orderType,
  });
};