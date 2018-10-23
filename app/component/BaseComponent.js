/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/22 下午3:59
 */

import React, {Component} from 'react'
import {StackActions} from 'react-navigation'
import {initStore} from '../store'
import GitHub from  'github-api'

export default class BaseComponent extends Component {
    constructor(props){
        super(props);
        this.github = {};

    }
    async componentDidMount(){
        // 如果需要使用github，则在子集中需要使用await调用
        const account = await initStore.then(res => res['account']);
        const {username, password} = account;
        this.github = new GitHub({
            username,
            password
        })
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
