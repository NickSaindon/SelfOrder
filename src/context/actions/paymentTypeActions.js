import { ORDER_SET_PAYMENT_TYPE } from "../constants/orderConstants";

export const setPaymentType = async (dispatch, paymentType) => {
  return dispatch({
    type: ORDER_SET_PAYMENT_TYPE,
    payload: paymentType,
  });
};