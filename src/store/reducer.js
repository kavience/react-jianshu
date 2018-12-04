import {combineReducers} from 'redux';
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store/index';
import {reducer as detailReducer} from '../pages/detail/store/index';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
});