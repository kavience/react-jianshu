import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {
    RecommendWrapper,
    RecommendItem,
} from "../style";

class Recommend extends PureComponent{
    render() {
        const {recommendList} = this.props;

        return (
            <RecommendWrapper>
                {recommendList.map((item) => {
                    return <RecommendItem imgUrl={item.imgUrl} key={item.id}/>
                })}
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    recommendList: state.home.get('recommendList').toJS()
});
export default connect(mapState, null)(Recommend);