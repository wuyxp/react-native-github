/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:55
 */
import React, {Component} from 'react'
import {Container, View, Text, Title, Subtitle, Tabs, ScrollableTab, Tab, Content, Spinner} from 'native-base'
import {connect} from 'react-redux'
import BaseComponent from '../component/BaseComponent'
import Header from '../component/Header'
import {FlatList, RefreshControl} from "react-native";

// import { fetchRepositories } from '@huchenme/github-trending';

class ViewScreen extends BaseComponent {
    constructor(props){
        super(props);
        this.state={
            since: 'daily',  // enum(daily, weekly, monthly)
            language: '',
            list: {

            },
            onRefreshLoading: false,
        }
    }
    loadList = () => {
        const {since, language} = this.state;
        // fetchRepositories({
        //     language,
        //     since,
        // }).then(repo => {
        //     console.log(repo);
        // })
    }
    _onChangeTab = (item) => {
        this.activeItem = item.ref.props.heading;
        const list = this.state.list;
        list[this.activeItem] = [];
        this.setState({list},() => {
            this.loadList();
        });
    };
    render() {
        return (
            <Container>
                <Header
                    title={() => ([
                        <Title style={{color: '#ffffff'}} key='trending'>Trending</Title>,
                        <Subtitle style={{color: '#ffffff'}} key='since'>{this.state.since}</Subtitle>
                    ])}
                />

                <Tabs
                    renderTabBar={()=> <ScrollableTab />}
                    tabBarUnderlineStyle={{backgroundColor: this.props.backgroundColor}}
                    onChangeTab={this._onChangeTab}
                >
                    {
                        this.props.showItem.map(item => {
                            if(item.checked){
                                return (
                                    <Tab
                                        heading={item.name}
                                        key={item.name}
                                        activeTextStyle={{color: this.props.backgroundColor}}
                                    >
                                        <Content>
                                            <FlatList
                                                renderItem={this._renderItem}
                                                data={this.state.list[item.name] || []}
                                                initialNumToRender={5}
                                                keyExtractor={item => item.id.toString()}
                                                ListEmptyComponent={<Spinner color={this.props.backgroundColor} />}
                                                refreshControl={
                                                    <RefreshControl
                                                        tintColor={this.props.backgroundColor}
                                                        titleColor={this.props.backgroundColor}
                                                        colors={[this.props.backgroundColor]}
                                                        refreshing={this.state.onRefreshLoading}
                                                        onRefresh={() => {this.loadList()}}
                                                        title={"正在加载数据中"}
                                                    />}
                                                // TODO 上拉刷新和下拉加载都不好使

                                                // onEndReachedThreshold={0.1}
                                                // onEndReached={this.loadList}
                                            />
                                        </Content>
                                    </Tab>
                                )
                            }
                            return null;
                        })
                    }
                </Tabs>
            </Container>
        );
    }
}
const mapStateToProps = state => {
    return {
        backgroundColor: state.theme.color,
        showItem: state.trending.showItem
    }
}

export default connect(mapStateToProps)(ViewScreen)
