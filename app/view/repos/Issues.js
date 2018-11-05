/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/24 上午10:47
 * @flow
 */
import React, {Component} from 'react'
import {Container, View, Text, Segment, Button, ListItem, Body, Right, Icon, Left, Spinner} from 'native-base'
import {FlatList, Image, RefreshControl} from 'react-native'
import {connect} from 'react-redux'
import Header,{ LeftReturn } from '../../component/Header'
import _ from 'lodash';
import moment from 'moment'

import BaseComponent from '../../component/BaseComponent'
import ThemeSegment from '../../component/ThemeSegment'
import { isLogin } from '../../common/Utils'

type _renderItem = {
    title: string,
    number: number,
    state: 'open' | 'close',
    created_at: string,
    comments: number,
    user: {
        avatar_url: string,
        login: string,
    }
}
class ViewScreen extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            tabData: [
                {
                    text: 'Open',
                    active: true,
                },{
                    text: 'Closed',
                }
            ],
            issuesData: [],
            onRefreshLoading: true,
        };
        const {navigation} = this.props;
        this.repoData = navigation.getParam('repoData');
        this.page = 1;
    }

    async componentDidMount(){
        await super.componentDidMount();
        this.loadIssuesData()
    }
    changeTab = async text => {
        this.setState({
            tabData: this.state.tabData.map(tab => ({...tab, active: tab.text === text}))
        });
        this.page = 1;
        this.loadIssuesData(text.toLocaleLowerCase());
    };
    loadIssuesData = async (state='open', page = this.page) => {
        this.setState({
            onRefreshLoading: true,
        })
        const issuesList = await this.fetchIssuesList({
            state,
            page,
            per_page: 10,
        });
        console.log('------获取issues列表-----', state, page);
        console.log(issuesList);
        const issuesData = _.get(issuesList, 'data', []);
        this.setState({
            issuesData: page === 1 ? issuesData : [...this.state.issuesData, ...issuesData],
            onRefreshLoading: false,
        });
    };
    _renderItem = ({item}: {item: _renderItem}) => {
        return (
            <ListItem>
                <Body>
                    <Text>{item.title}</Text>
                    <Text note>
                        {`#${item.number} ${item.state} ${moment(item.created_at).fromNow()} by   `}
                        <Image source={{uri: _.get(item, 'user.avatar_url')}} style={{width: 10, height: 10 }} />
                        {_.get(item,'user.login')}
                    </Text>
                </Body>
                <Right>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name='md-clipboard' style={{fontSize: 16, color: this.props.backgroundColor}} />
                    <Text note> {item.comments} </Text>
                    </View>
                </Right>
            </ListItem>
        )
    };
    fetchIssuesList = (options) => {
        return this.github.getIssues(this.repoData.owner.login, this.repoData.name).listIssues(options)
    };
    render() {
        const state = this.state.tabData.find(item => item.active).text.toLocaleLowerCase();
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
                    data={this.state.issuesData}
                    keyExtractor={(data: _renderItem): string => data.number.toString()}
                    ListEmptyComponent={<Spinner color={this.props.backgroundColor} />}
                    onEndReachedThreshold={0.3}
                    onEndReached={() => {this.loadIssuesData(state, this.page++)}}
                    refreshControl={
                        <RefreshControl
                            tintColor={this.props.backgroundColor}
                            titleColor={this.props.backgroundColor}
                            colors={[this.props.backgroundColor]}
                            refreshing={this.state.onRefreshLoading}
                            onRefresh={() => {this.page = 1; this.loadIssuesData(state)}}
                            title={"正在加载数据中"}
                        />}
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
