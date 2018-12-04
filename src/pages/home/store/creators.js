import {constants} from './index';
import axios from 'axios';

export const homeData = (data) => ({
    type: constants.GET_HOME_DATA,
    topicList: data.data.topicList,
    articleList: data.data.articleList,
    recommendList: data.data.recommendList,
    writerList: data.data.writerList,
});

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            dispatch(homeData(res.data));
        })
    }
};

export const MoreHomeData = (data) => ({
    type: constants.GET_MORE_ARTICLE_DATA,
    articleList: data.data
});

export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/more-article.json').then((res) => {
            dispatch(MoreHomeData(res.data));
        })
    }
};

export const changeScrollToShow = (data) => ({
    type: constants.CHANGE_SCROLL_TOP_SHOW,
    data
});