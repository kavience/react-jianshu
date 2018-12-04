import React  from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {headerActionCreators}  from './store';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
} from './style';

// 这是header无状态组件
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载APP</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused': ''} placeholder='搜索'
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe618;</i>
                    <SearchInfo className={props.focused ? 'focused' : ''}>
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch>换一批</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>PHP</SearchInfoItem>
                            <SearchInfoItem>微信小程序</SearchInfoItem>
                            <SearchInfoItem>读书</SearchInfoItem>
                            <SearchInfoItem>电影</SearchInfoItem>
                            <SearchInfoItem>音乐</SearchInfoItem>
                            <SearchInfoItem>laravel</SearchInfoItem>
                            <SearchInfoItem>react</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>PHP</SearchInfoItem>
                            <SearchInfoItem>微信小程序</SearchInfoItem>
                            <SearchInfoItem>读书</SearchInfoItem>
                            <SearchInfoItem>电影</SearchInfoItem>
                            <SearchInfoItem>音乐</SearchInfoItem>
                            <SearchInfoItem>laravel</SearchInfoItem>
                            <SearchInfoItem>react</SearchInfoItem>
                        </SearchInfoList>
                    </SearchInfo>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writing'>
                    <i className="iconfont">&#xe678;</i>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(headerActionCreators.searchFoucs());
        },
        handleInputBlur() {
            dispatch(headerActionCreators.searchBlur());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);