import {fromJS} from 'immutable';

const defaultState = fromJS({
    article: {
        id: 1,
        title: '男女之间有了这些“表现”，关系就不会再“纯洁”了',
        content: '男女之间，很容易产生不一样的感情，虽说一开始都是以正常的身份去对待的，但时间久了，情就会慢慢地升华，两个人异性好朋友之间...'
    }
});

export default (state = defaultState, action) => {
    return state;
}