/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/22 下午3:59
 */

import React, {Component} from 'react'

export default class BaseComponent extends Component {
    toReposDetail = (item) => {
        this.props.navigation.push('reposDetail')
    };
}