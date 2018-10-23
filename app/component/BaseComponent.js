/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/22 下午3:59
 */

import React, {Component} from 'react'
import {StackActions} from 'react-navigation'

export default class BaseComponent extends Component {
    constructor(props){
        super(props);
    }
    toReposDetail = repoData => {
        const pushAction = StackActions.push({
            routeName: 'reposDetail',
            params: {
                repoData
            }
        });
        this.props.navigation.dispatch(pushAction);
    };
}