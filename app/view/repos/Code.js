/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/5 下午2:42
 * @flow
 */
import React, {Component} from 'react'
import {Container, View, Text, Segment, Button, ListItem, Body, Right, Icon, Left, Spinner, Content, List, Toast} from 'native-base'
import {connect} from 'react-redux'
import Header,{ LeftReturn } from '../../component/Header'
import _ from 'lodash';
import moment from 'moment'

import BaseComponent from '../../component/BaseComponent'
import ListIconItem from '../../component/ListIconItem'
import { isLogin } from '../../common/Utils'

class ViewScreen extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            path: [],
            tree: [],
            toTreeIng: false,
            branch : 'master',
        };
        const {navigation} = this.props;
        this.repoData = navigation.getParam('repoData');
    }

    async componentDidMount(){
        await super.componentDidMount();
        const {branch} = this.state;
        this.setState(() => ({toTreeIng: true}))
        const path = await this.loadPath(branch);
        console.log('----获取master下的bobl');
        console.log(path);
        const tree = _.get(path, 'data.tree', []);
        this.setState({
            tree,
            path: [{...path.data, path: branch}],
            toTreeIng: false,
        })
    }

    setPath = async (sha = 'master') => {
        const path = await this.loadPath(sha);
        console.log('----获取master下的bobl');
        console.log(path);
        const tree = _.get(path, 'data.tree', []);
        this.setState({
            tree,
            toTreeIng: false,
        })
    }

    loadPath = (sha = 'master') => {
        return this.github.getRepo(this.repoData.owner.login, this.repoData.name).getTree(sha);
    }
    toTree = async item => {
        console.log('要进入的tree是');
        console.log(item);
        const {path, toTreeIng} = this.state;
        if(toTreeIng){
            Toast.show({
                text: '正在请求，请稍后'
            })
        }
        this.setState(() => ({
            toTreeIng: true,
            path: [...path, item]
        }));
        await this.setPath(item.sha);
    }
    forwardTree = async item => {
        const {path, toTreeIng} = this.state;
        if(toTreeIng){
            Toast.show({
                text: '正在请求，请稍后'
            })
        }
        this.setState(() => ({
            toTreeIng: true,
            path: _.slice(path, 0, _.findIndex(path, i => i.sha === item.sha)+1)
        }));
        await this.setPath(item.sha);
    }
    render() {
        return (
            <Container>
                <Header
                    title={this.repoData.name}
                    leftComponent={<LeftReturn/>}
                />
                <Content>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        {
                            this.state.path.map(item => {
                                return (
                                    <Button key={item.sha} onPress={() => this.forwardTree(item)} iconRight transparent primary small>
                                        <Text>{item.path}</Text>
                                        <Icon name='arrow-forward' />
                                    </Button>
                                )
                            })
                        }
                    </View>
                    <List>
                        {
                            this.state.tree.map(item => {
                                return (
                                    <ListIconItem
                                        key={item.sha}
                                        icon={item.type === 'blob' ? "md-paper" : "md-folder-open"}
                                        tipText={item.size}
                                        onPress={() => this.toTree(item)}
                                        text={item.path}
                                    />
                                )
                            })
                        }
                    </List>
                </Content>
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