/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午4:59
 */
import React,{ Component } from 'react'
import PropsType from 'prop-types'
import {Header, Left, Body, Right, Title, Text} from 'native-base'

export default class HeaderComponent extends Component{
    render() {
        return (
            <Header>
                <Left></Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right></Right>
            </Header>
        );
    }
    static PropsType = {
        title: PropsType.string
    }
    static defaultProps = {
        title: ''
    }}

