import {constants} from './index';
import { fromJS } from 'immutable';

import axios from 'axios';

export const searchFoucs = () => ({
    type: constants.SEARCH_FOCUS
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

const searchInfo = (data) => ({
    type: constants.GET_SEARCH_INFO,
    data: fromJS(data)
});

export const changeSearchInfo = () => ({
    type: constants.CHANGE_SEARCH_INFO,
});

export const getSearchInfo = () => {
  return (dispatch) => {
      axios.get('/api/search-info.json').then((res) => {
        dispatch(searchInfo(res.data.data));
      }).catch((err) => {
          console.log(err);
      })
  }
};
