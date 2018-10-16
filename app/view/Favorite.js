/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:56
 */
import React, {Component} from 'react'
import { FlatList } from 'react-native'
import {connect} from 'react-redux'
import {Container, View, Text, Content, Tab, Tabs} from 'native-base'

import Header from '../component/Header'
import {getFetch} from '../common/FetchUtils'
import Urls from '../common/Urls'

import FavoriteItem from '../component/FavoriteItem'

class ViewScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
        }
    }
    loadList = async () => {
        try {
            const data = await getFetch(Urls.repositories, {
                q: 'ALL',
                sort: 'stars',
            });
            this.setState({
                list: data.items
            })
        }catch (e) {

        }
    }
    componentDidMount(){
        this.loadList();
    }
    _renderItem = ({item}) => {
        return (
            <FavoriteItem data={item}/>
        )
    }
    render() {
        return (
            <Container>
                <Header
                    title={"Favorite"}
                />
                {/*<Tabs>*/}
                    {/*<Tab heading="Tab1">*/}
                    {/*</Tab>*/}
                    {/*<Tab heading="Tab2">*/}
                    {/*</Tab>*/}
                    {/*<Tab heading="Tab3">*/}
                    {/*</Tab>*/}
                    {/*<Tab heading="Tab4">*/}
                    {/*</Tab>*/}
                    {/*<Tab heading="Tab5">*/}
                    {/*</Tab>*/}
                {/*</Tabs>*/}
                <Content>
                    <FlatList
                        renderItem={this._renderItem}
                        data={this.state.list}
                        initialNumToRender={5}
                        keyExtractor={item => item.id.toString()}
                    />

                </Content>
            </Container>
        );
    }
}
const mapStateToProps = state => {
    return {
        backgroundColor: state.theme.color
    }
};
export default connect(mapStateToProps)(ViewScreen)