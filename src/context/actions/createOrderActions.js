import { 
  ORDER_CREATE_REQUEST, 
  ORDER_CREATE_SUCCESS, 
  ORDER_CREATE_FAIL,
  ORDER_CLEAR
} from "../constants/orderConstants";
import Axios from 'axios';

export const createOrder = async (dispatch, order) => {
  dispatch({ type: ORDER_CREATE_REQUEST });
  
  try {
    const { data } = await Axios.post('/api/orders', order);
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: ORDER_CLEAR,
    });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error.message,
    });
  }
};