import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import {GlobalStyle} from './static/iconfont/iconfont';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div id='root'>
                    <Fragment>
                        <GlobalStyle/>
                        <BrowserRouter>
                            <div className="">
                                <Header/>

                                <Route path='' exact component={Home} />
                                <Route path='/detail/:id' exact component={Detail} />
                            </div>
                        </BrowserRouter>
                    </Fragment>
                </div>
            </Provider>
        )
    }
}

export default App;