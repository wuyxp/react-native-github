/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/22 下午3:47
 */
import React from 'react'
import {Container, View, Text, Icon, ListItem, Left, Button, Body, Right} from 'native-base'

import ParallaxScrollView from 'react-native-parallax-scroll-view'
import {Dimensions, TouchableOpacity} from "react-native";
import {connect} from 'react-redux'

import BaseComponent from '../../component/BaseComponent'
import Header, {LeftReturn} from '../../component/Header'
import Avatar from '../../component/Avatar'
import RenderBackground from '../../component/ParallaxScrollViewRenderBackground'
import ListIconItem from '../../component/ListIconItem'
import ThemeIconButton from '../../component/ThemeIconButton'
import { isLogin } from '../../common/Utils'

class ViewScreen extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            isStarred: false,
        };
        const {navigation} = this.props;
        this.repoData = navigation.getParam('repoData');
        console.log(this.repoData);
    }

    async componentDidMount(){
        await super.componentDidMount();
        if(isLogin(this.props.userInfo)){
            this.loadStar();
            this.loadFork();
        }
    }

    staring = () => {
        if(isLogin(this.props.userInfo)){
            const {isStarred} = this.state;
            if(!isStarred){
                this.github.getRepo(this.repoData.full_name).star().then(isStarred => {
                    this.setState(() => ({
                        isStarred: true
                    }))
                })
            }else{
                this.github.getRepo(this.repoData.full_name).unstar().then(isStarred => {
                    this.setState(() => ({
                        isStarred: false
                    }))
                })
            }
        }else{
            this.props.navigation.push("Login")
        }
    };
    forking = () => {
        if(isLogin(this.props.userInfo)){
            const {isStarred} = this.state;
            if(!isStarred){
                this.github.getRepo(this.repoData.full_name).star().then(isStarred => {
                    this.setState(() => ({
                        isStarred: true
                    }))
                })
            }else{
                this.github.getRepo(this.repoData.full_name).unstar().then(isStarred => {
                    this.setState(() => ({
                        isStarred: false
                    }))
                })
            }
        }else{
            this.props.navigation.push("Login")
        }
    };

    loadStar = () => {
        this.github.getRepo(this.repoData.full_name).isStarred().then(isStarred => {
            this.setState({
                isStarred
            })
        })
    };
    loadFork = () => {

    };

    render() {
        return (
            <View style={{flex: 1}}>
                <ParallaxScrollView
                    style={{height: 200}}
                    renderStickyHeader={() =>
                        <Header
                            title={this.repoData.name}
                            leftComponent={<LeftReturn/>}
                        />
                    }
                    stickyHeaderHeight={60}
                    renderBackground={() =>
                        <RenderBackground
                            avatar_url={this.repoData.owner.avatar_url}
                        />
                    }
                    parallaxHeaderHeight={300}
                    backgroundSpeed={10}
                >
                    <View style={{position:'absolute', top: -300, width: Dimensions.get('window').width}}>
                        <View style={{marginTop: 40,}}>
                            <TouchableOpacity onPress={() => {this.props.navigation.pop()}}>
                                <Icon name='ios-arrow-back' active style={{color: '#fff', marginLeft: 10}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Avatar avatar_url={this.repoData.owner.avatar_url}/>
                            <View style={{paddingLeft: 20, paddingRight: 20, marginTop:10,}}>
                                <View style={{marginBottom: 10,  flexDirection: 'row', justifyContent:'space-around'}}>
                                    <ThemeIconButton
                                        icon='md-star'
                                        text={'star:'+((+this.repoData.stargazers_count)+(+this.state.isStarred))}
                                        bordered={!this.state.isStarred}
                                        onPress={this.staring}
                                    />
                                    <ThemeIconButton
                                        icon='md-git-network'
                                        text={'fork:'+this.repoData.forks_count}
                                        bordered={true}
                                        onPress={this.forking}
                                    />
                                </View>
                                <Text style={{color: '#ffffff'}}>
                                    {this.repoData.description}
                                </Text>
                            </View>
                        </View>
                    </View>

                        <ListIconItem
                            onPress={() => {this.toReposCode(this.repoData)}}
                            icon="md-code"
                            text="code"
                        />

                        <ListIconItem
                            onPress={() => {this.toReposIssues(this.repoData)}}
                            icon="md-git-commit"
                            text="Issues"
                        />

                        <ListIconItem
                            onPress={() => {}}
                            icon="md-git-pull-request"
                            text="Pull Requests"
                        />

                        <ListIconItem
                            onPress={() => {}}
                            icon="md-star"
                            text="stars"
                        />

                        <ListIconItem
                            onPress={() => {}}
                            icon="md-person-add"
                            text="Followers"
                        />



                </ParallaxScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.theme.color,
        userInfo: state.userInfo,
    }
};
const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewScreen);