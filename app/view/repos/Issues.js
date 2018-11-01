/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/24 上午10:47
 * @flow
 */
import React, {Component} from 'react'
import {Container, View, Text, Segment, Button, ListItem, Body, Right} from 'native-base'
import {FlatList} from 'react-native'
import {connect} from 'react-redux'
import Header,{ LeftReturn } from '../../component/Header'
import _ from 'lodash';

import BaseComponent from '../../component/BaseComponent'
import ThemeSegment from '../../component/ThemeSegment'
import { isLogin } from '../../common/Utils'

class ViewScreen extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            tabData: [
                {
                    text: 'open',
                    active: true,
                },{
                    text: 'closed',
                }
            ],
            issueeData: [{},{}],
        };
        const {navigation} = this.props;
        this.repoData = navigation.getParam('repoData');
    }

    async componentDidMount(){
        await super.componentDidMount();
        const issuesList = await this.fetchIssuesList({
            state: 'open',
            page:1,
            per_page: 10,
        });
        console.log('------获取issues列表-----');
        console.log(issuesList);
    }
    changeTab = text => {
        this.setState({
            tabData: this.state.tabData.map(tab => ({...tab, active: tab.text === text}))
        })
    }
    _renderItem = (data) => {
        return (
            <ListItem>
                <Body>
                    <Text>Kumar Pratik</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>3:43 pm</Text>
                </Right>
            </ListItem>
        )
    }
    fetchIssuesList = (options) => {
        return this.github.getIssues(this.repoData.owner.login, this.repoData.name).listIssues(options)
    }
    render() {
        return (
            <Container>
                <Header
                    title={this.repoData.name}
                    leftComponent={<LeftReturn/>}
                />
                <ThemeSegment
                    buttons={this.state.tabData}
                    onChangeTab={tab => this.changeTab(tab)}
                />
                <FlatList
                    renderItem={this._renderItem}
                    data={this.state.issueeData}
                    keyExtractor={data => data.toString()}
                />
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return {
        backgroundColor: state.theme.color,
        showItem: state.favorite.showItem,
        userInfo: state.userInfo,
    }
};
export default connect(mapStateToProps)(ViewScreen)
