import {
    ORDER_QUEUE_LIST_REQUEST,
    ORDER_QUEUE_LIST_SUCCESS,
    ORDER_QUEUE_LIST_FAIL,
} from '../constants/queueConstants';
import Axios from 'axios';

export const listQueue = async (dispatch) => {
  dispatch({ type: ORDER_QUEUE_LIST_REQUEST });

  try {
    const { data } = await Axios.get(`/api/orders/queue`);
    return dispatch({
      type: ORDER_QUEUE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: ORDER_QUEUE_LIST_FAIL,
      payload: error.message,
    });
  }
};