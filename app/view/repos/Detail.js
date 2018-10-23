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


class ViewScreen extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = { };
        const {navigation} = this.props;
        this.repoData = navigation.getParam('repoData');
        console.log(this.repoData);
    }

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
                        <View style={{marginTop: 50,}}>
                            <Icon name='ios-arrow-back' active style={{color: '#fff', marginLeft: 10}} onPress={() => this.props.navigation.pop()}/>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                            <Avatar avatar_url={this.repoData.owner.avatar_url}/>
                        </View>
                        <View>

                        </View>
                    </View>

                    <View>
                        <ListIconItem
                            onPress={() => {}}
                            icon="md-bookmarks"
                            text="Repositories"
                        />

                        <ListIconItem
                            onPress={() => {}}
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

                    </View>


                </ParallaxScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.theme.color,
    }
};
const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewScreen);