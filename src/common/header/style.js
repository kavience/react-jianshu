import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 56px;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`;


export const Nav = styled.div`
    height: 100%;
    width: 960px;
    margin: 0 auto;
    padding-size: 70px;
    border-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .slide-enter {
        width: 160px;
        transition: all .3s ease-out;
    }
    .slide-enter-active {
        width: 240px;    
    }
    .slide-exit {
        transition: all .3s ease-out;
    }
    .slide-exit-active {
        width: 160px;
    }
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background-color: #777;
            color: #fff;
        }
    }
`;
export const NavSearch = styled.input.attrs({

})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    padding :0 35px 0 20px;
    box-sizing: border-box;
    background: #eee;
    font-size: 14px;
    margin-left: 20px;
    color: #777;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`;
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 12px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .3s ease-in;
		transform-origin: center center;
    }
`;
export const SearchInfoItem = styled.a`
    float: left;
    display: block;
    font-size: 12px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    color: #333;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.button`
    float: right;
    height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    border: 1px solid #ec6149;
    font-size: 14px;
    margin-right: 20px;
    padding: 0 20px;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        background-color: #ec6149;
        color: #fff;
    }
`;




