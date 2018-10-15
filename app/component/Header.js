/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午4:59
 */
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {withNavigation} from 'react-navigation'
import _ from 'lodash'
import PropsType from 'prop-types'
import {Header, Left, Body, Right, Title, Text, Icon, Button} from 'native-base'
import { StatusBar } from 'react-native'

class HeaderComponent extends Component{
    render() {
        return (
            <Header  style={{backgroundColor: this.props.backgroundColor}}>
                <StatusBar barStyle={"light-content"}/>
                <Left>
                    {
                        this.props.leftComponent ? this.props.leftComponent : null
                    }
                </Left>
                <Body>
                    <Title style={{color: "#ffffff"}}>{this.props.title}</Title>
                </Body>
                <Right></Right>
            </Header>
        );
    }
    static PropsType = {
        title: PropsType.string,
        leftComponent: PropsType.element
    }
    static defaultProps = {
        title: ''
    }
}
class LeftReturnComponent extends Component{
    render() {
        return (
            <Button transparent onPress={() => {this.props.navigation.goBack()}}>
                <Icon name="ios-arrow-back" style={{color: '#ffffff'}}/>
            </Button>
        )
    }
}
export const LeftReturn = withNavigation(LeftReturnComponent);
const mapStateToProps = state => ({backgroundColor: state.theme.color});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HeaderComponent));

