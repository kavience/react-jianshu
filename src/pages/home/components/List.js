import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionHomeCreator} from '../store';
import {Link} from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';

class List extends PureComponent {
    render() {
        const {list, getMoreList} = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link to={'/detail/' + index} key={index}>
                                <ListItem>
                                    <img className='pic'
                                         src={item.get('imgUrl')}
                                         alt=""/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>
                                            {item.get('desc')}
                                        </p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }

                <LoadMore onClick={getMoreList}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.home.get('articleList')
});

const mapDispatch = (dispatch) => ({
    getMoreList() {
        dispatch(actionHomeCreator.getMoreList());
    }
});
export default connect(mapState, mapDispatch)(List);