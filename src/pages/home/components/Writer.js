import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    WriterWrapper,
    WriterItem,
    WriterInfoTitle,
    WriterInfoChange
} from '../style'

class Writer extends PureComponent{
    render() {
        const {writerList, handleChangeWriterInfo} = this.props;

        return (
            <WriterWrapper>
                <WriterInfoTitle>
                    推荐读者
                    <WriterInfoChange onClick={() => handleChangeWriterInfo(this.spinIcon)}>
                        <i ref={(icon) => {this.spinIcon = icon}} className="spin iconfont">&#xe851;</i>
                        换一批
                    </WriterInfoChange>
                </WriterInfoTitle>
                {
                    writerList.map((item) => {
                        return(
                            <WriterItem key={item.id}>
                                <img className='avatar' src={item.avatarUrl} alt=""/>
                                <div className='auth-info'>
                                    <div>
                                        <p className='nick_name'>{item.name}</p>
                                        <p className='add'>+关注</p>
                                    </div>
                                    <p className='desc'>{item.desc}</p>
                                </div>
                            </WriterItem>
                        );
                    })
                }
                <div className="view-all">查看全部 ></div>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    writerList: state.home.get('writerList').toJS()
});
const mapDispatch = (dispatch) => {
    return {
        handleChangeWriterInfo(icon) {
            console.log(icon);
        }
    };
};
export default connect(mapState, mapDispatch)(Writer);