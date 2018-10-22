/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:56
 */
import React, {Component} from 'react'
import { FlatList, RefreshControl, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import {Container, View, Text, Content, Tab, Tabs, ScrollableTab, Spinner, ListItem} from 'native-base'
import BaseComponent from '../component/BaseComponent'

import Header from '../component/Header'
import {getFetch} from '../common/FetchUtils'
import Urls from '../common/Urls'

import FavoriteItem from '../component/FavoriteItem'

class ViewScreen extends BaseComponent {
    constructor(props){
        super(props);
        this.state = {
            list: {},
            onRefreshLoading: false,
        }
        this.activeItem = this.props.showItem.filter(item => item.checked)[0].name;
    }
    loadList = async () => {
        try {
            this.setState({
                onRefreshLoading: true,
            });
            const data = await getFetch(Urls.repositories, {
                q: this.activeItem,
                sort: 'stars',
                per_page: 10,
            });
            const list = this.state.list;
            list[this.activeItem] = data.items;
            this.setState({
                list,
                onRefreshLoading: false,
            })
        }catch (e) {

        }
    };
    componentDidMount(){
        this.loadList();
    }
    _renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => this.toReposDetail(item)}>
                <FavoriteItem data={item}/>
            </TouchableOpacity>
        )
    };
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
                    title={"Favorite"}
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
        showItem: state.favorite.showItem,
    }
};
export default connect(mapStateToProps)(ViewScreen)