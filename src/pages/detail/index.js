import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    DetailWrapper,
    Header,
    Content,
} from './style';

class Detail extends Component{
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.article.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.article.content}} />
            </DetailWrapper>
        )
    }
}
const mapState = (state) => ({
    article: state.detail.get('article').toJS()
});

export default connect(mapState, null)(Detail);