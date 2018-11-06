/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午4:59
 * @flow
 */
import React,{ Component } from 'react'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'
import {withNavigation} from 'react-navigation'
import _ from 'lodash'
import PropsType from 'prop-types'
import {Header, Left, Body, Right, Title, Text, Icon, Button} from 'native-base'

type Props = {
    title: any,
    backgroundColor: string,
    leftComponent: Component<any>,
}
class HeaderComponent extends Component<Props>{
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
                {
                    typeof this.props.title === 'string' ?
                        <Title style={{color: "#ffffff"}}>{this.props.title}</Title> :
                        this.props.title(this.props.backgroundColor)
                }
                </Body>
                <Right></Right>
            </Header>
        );
    }
    static PropsType = {
        title: PropsType.oneOfType([
            PropsType.string,
            PropsType.func
        ]),
        leftComponent: PropsType.element
    }
}
class LeftReturnComponent extends Component<{navigation: Object}>{
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

