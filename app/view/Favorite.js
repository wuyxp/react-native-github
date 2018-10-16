/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:56
 */
import React, {Component} from 'react'
import { FlatList } from 'react-native'
import {connect} from 'react-redux'
import {Container, View, Text, Content, Tab, Tabs, ScrollableTab} from 'native-base'

import Header from '../component/Header'
import {getFetch} from '../common/FetchUtils'
import Urls from '../common/Urls'

import FavoriteItem from '../component/FavoriteItem'

class ViewScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: {},
        }
        this.activeItem = this.props.showItem.filter(item => item.checked)[0].name
    }
    loadList = async () => {
        try {
            const data = await getFetch(Urls.repositories, {
                q: this.activeItem,
                sort: 'stars',
            });
            const list = this.state.list;
            list[this.activeItem] = data.items;
            this.setState({
                list,
            })
        }catch (e) {

        }
    };
    componentDidMount(){
        this.loadList();
    }
    _renderItem = ({item}) => {
        return (
            <FavoriteItem data={item}/>
        )
    };
    _onChangeTab = (item) => {
        this.activeItem = item.ref.props.heading;
        this.loadList();
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