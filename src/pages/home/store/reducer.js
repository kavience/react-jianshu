import {fromJS} from 'immutable';
import {constants} from './index';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    showScroll: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList),
            });
        case constants.GET_MORE_ARTICLE_DATA:
            return state.set('articleList', state.get('articleList').concat(fromJS(action.articleList)));
        case constants.CHANGE_SCROLL_TOP_SHOW:
            if (action.data > 400) {
                return state.set('showScroll', true);
            } else {
                return state.set('showScroll', false);
            }
        default:
            return state;
    }
}
