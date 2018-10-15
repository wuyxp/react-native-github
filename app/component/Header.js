/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午4:59
 */
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import PropsType from 'prop-types'
import {Header, Left, Body, Right, Title, Text} from 'native-base'
import { StatusBar } from 'react-native'

class HeaderComponent extends Component{
    render() {
        return (
            <Header  style={{backgroundColor: this.props.backgroundColor}}>
                <StatusBar barStyle={"light-content"}/>
                <Left></Left>
                <Body>
                    <Title style={{color: "#ffffff"}}>{this.props.title}</Title>
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
    }
}
const mapStateToProps = state => ({backgroundColor: _.get(state,'theme.color','')});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

