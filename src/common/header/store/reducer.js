import {constants} from './index';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    searchInfo: [],
    page: 1,
    totalPage: 1,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_SEARCH_INFO:
            const page = (state.get('page') + 1) % state.get('totalPage') + 1;
            return state.set('page', page);
        case constants.GET_SEARCH_INFO:
            if (state.get('searchInfo').size > 0) {
                return state;
            } else {
                return state.merge({
                    'searchInfo': action.data,
                    'totalPage': Math.ceil(action.data.size / 10)
                });
            }
        default:
            return state;
    }
}
