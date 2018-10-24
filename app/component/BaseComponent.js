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
        });
        // since we're unauthenticated the limit is 60 requests per hour
        this.github.getRateLimit().getRateLimit()
            .then(function(resp) {
                console.log('Limit remaining: ' + resp.data.rate.remaining);
                // date constructor takes epoch milliseconds and we get epoch seconds
                console.log('Reset date: ' + new Date(resp.data.rate.reset * 1000));
            }).catch(function(error) {
            console.log('Error fetching rate limit', error.message);
        });

    }

    getReposAction = (routeName, repoData) => {
        return StackActions.push({
            routeName,
            params: {
                repoData
            }
        });
    }

    toReposDetail = repoData => {
        this.props.navigation.dispatch(this.getReposAction('reposDetail', repoData));
    };

    toReposIssues = repoData => {
        this.props.navigation.dispatch(this.getReposAction('reposIssues', repoData));
    }
}
