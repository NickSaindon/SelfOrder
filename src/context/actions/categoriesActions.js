import { 
    CATEGORY_LIST_REQUEST, 
    CATEGORY_LIST_SUCCESS, 
    CATEGORY_LIST_FAIL
} from '../constants/categoryConstant'
import Axios from 'axios';

export const listCategories = async (dispatch) => {
  dispatch({ type: CATEGORY_LIST_REQUEST });

  try {
    const { data } = await Axios.get('/api/categories');
    return dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: error.message,
    });
  }
};