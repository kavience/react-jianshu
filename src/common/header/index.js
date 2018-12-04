import React  from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {headerActionCreators}  from './store';
import {Link} from 'react-router-dom';

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

class Header extends React.Component{

    getSearchInfo(focused, mouseIn) {
        const { handleMouseEnter, handleChangeSearchInfo, handleMouseLeave } = this.props;

        const searchInfo = this.props.searchInfo.toJS();
        const page = this.props.page;
        let searchInfoList = [];
        for (let i = (page - 1) * 10, k=0; i < (page - 1) * 10 + 10; i++, k++) {
            if (searchInfo[i] == null) {
                break;
            }
            searchInfoList.push(
                <SearchInfoItem key={searchInfo[i]}>{searchInfo[i]}</SearchInfoItem>
            )
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangeSearchInfo(this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="spin iconfont">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {searchInfoList}
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {

        }
    }
    render() {
        const { focused, handleInputFocus, handleInputBlur, mouseIn, searchInfo} = this.props;
        return (
            <HeaderWrapper>
                <Link to=''>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused': ''} placeholder='搜索'
                                onFocus={() => handleInputFocus(searchInfo)}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe618;</i>
                        {this.getSearchInfo(focused, mouseIn)}
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
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused'),
        mouseIn: state.header.get('mouseIn'),
        searchInfo: state.header.get('searchInfo'),
        page: state.header.get('page'),
        totalPage: state.header.get('totalPage'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(searchInfo) {
            searchInfo.size === 0 && dispatch(headerActionCreators.getSearchInfo());
            dispatch(headerActionCreators.searchFoucs());
        },
        handleInputBlur() {
            dispatch(headerActionCreators.searchBlur());
        },
        handleChangeSearchInfo(spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            dispatch(headerActionCreators.changeSearchInfo());
        },
        handleMouseEnter() {
            dispatch(headerActionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(headerActionCreators.mouseLeave());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);