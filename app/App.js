/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 上午11:44
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Router from './Router'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
