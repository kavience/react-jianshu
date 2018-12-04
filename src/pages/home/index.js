import React, {PureComponent} from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import {actionHomeCreator} from './store/index';
import {BackTop} from './style';

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        src="https://upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt="" className='banner_img'/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}

            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.getHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollToShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollToShow);
    }
}
const mapState = (state) => ({
    showScroll: state.home.get('showScroll')
});
const mapDispatch = (dispatch) => ({
    getHomeData() {
        dispatch(actionHomeCreator.getHomeData());
    },
    changeScrollToShow() {
        dispatch(actionHomeCreator.changeScrollToShow(document.documentElement.scrollTop))
    }
});

export default connect(mapState, mapDispatch)(Home);