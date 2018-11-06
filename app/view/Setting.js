/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:57
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View} from 'react-native'
import {StackActions, NavigationActions} from 'react-navigation'
import _ from 'lodash'
import BaseComponent from '../component/BaseComponent'
import {Container, Content, ListItem, Left, Right, Body, Button, Icon, Text} from 'native-base'
import Header from '../component/Header'
import ListIconItem from '../component/ListIconItem'

import {logout} from '../action/userInfo/logout'
import {logout as account_logout} from '../action/account/logout'

class ViewScreen extends BaseComponent {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }
    }

    logoutGithub = () => {
        this.setState({
            isLoading: true,
        })
        this.props.logout();
        this.props.account_logout();
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'BottomTab'})]
        })
        this.props.navigation.dispatch(resetAction);
        this.setState({
            isLoading: false,
        })
        _
    }

    render() {
        return (
            <Container>
                <Header
                    title={"设置"}
                />
                <Content>
                    <ListIconItem
                        onPress={() => {
                            this.props.navigation.push("ColorList")
                        }}
                        icon={'film'}
                        text={'颜色主题'}
                        tipText={this.props.themeColor}
                    />
                    <ListIconItem
                        onPress={() => {
                            this.props.navigation.push("webBlog")
                        }}
                        icon={'md-globe'}
                        text={'我的博客'}
                    />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 50,
                    }}>
                        <View>
                            <Button disabled={this.state.isLoading} block rounded bordered
                                    style={{borderColor: this.props.themeColor, width: 300}}
                                    onPress={this.logoutGithub}>
                                <Text style={{color: this.props.themeColor}}>LOGOUT</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        themeColor: _.get(state, 'theme.color', '')
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        account_logout: () => dispatch(account_logout())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewScreen)