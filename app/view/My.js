/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:57
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Image, Animated, DeviceInfo, Dimensions ,findNodeHandle, TouchableOpacity, Alert} from 'react-native'
import _ from 'lodash'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { BlurView, VibrancyView } from 'react-native-blur';
import {
    Container,
    Content,
    Left,
    Right,
    Body,
    Button,
    Icon,
    Text,
    Form,
    Item,
    Label,
    Input,
    ListItem
} from 'native-base'
import Header from '../component/Header'
import Assets from '../assets'

class ViewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { viewRef: null };
    }
    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }
    pressLogo = () => {
        if(this.props.userInfo.id){
            // TODO 这里打开相册或者吊摄像图，用来更改logo
        }else{
            this.props.navigation.push('Login')
        }
    }
    render() {
        const leftButtonStyle = { backgroundColor: this.props.themeColor, width: 25, height: 25 };
        const leftButtonIconStyle = {fontSize: 15};
        return (
            <Container>
                <Header
                    title={"我的"}
                />
                <Content >
                    {/* // TODO 无法实现下拉图片放大 */}
                    <ParallaxScrollView
                        style={{ flex: 1, backgroundColor: 'hotpink', overflow: 'hidden' }}
                        renderBackground={() =>
                            <View
                            >
                                <Image
                                    ref={(img) => { this.backgroundImage = img; }}
                                    source={this.props.userInfo.id ? {uri : this.props.userInfo.avatar_url} :Assets.via()}
                                    style={{width: window.width, height: 350}}
                                    onLoadEnd={this.imageLoaded.bind(this)}
                                />
                                <BlurView
                                    style={{
                                        position: "absolute",
                                        top: 0, left: 0, bottom: 0, right: 0,
                                        zIndex: 100,
                                    }}
                                    viewRef={this.state.viewRef}
                                    blurType="light"
                                    blurAmount={10}
                                >

                                </BlurView>
                            </View>
                        }
                        // renderFixedHeader={() => <Text style={{ textAlign: 'right', color: 'white', padding: 5, fontSize: 20 }}>Hello</Text>}
                        parallaxHeaderHeight={ 350 }
                        backgroundSpeed={10}
                    >
                        <TouchableOpacity
                            onPress={this.pressLogo}
                            style={{
                                position: 'absolute',
                                zIndex: 100,
                                top: -120,
                                width: 100,
                                height: 100,
                                left: (Dimensions.get('window').width - 100)/ 2,
                                borderRadius: 50,
                                borderColor: this.props.themeColor,
                                borderWidth: 2,
                                backgroundColor: '#ffffff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden',
                            }}
                        >
                            {
                                this.props.userInfo.id ?
                                    <Image source={{uri: this.props.userInfo.avatar_url, width: 80, height: 80}} /> :
                                    <Icon name={'md-person'} style={{color: this.props.themeColor, fontSize: 50}}/>
                            }
                        </TouchableOpacity>

                        <ListItem icon onPress={() => {this.props.navigation.push("ColorList")}}>
                            <Left>
                                <Button style={leftButtonStyle}>
                                    <Icon active name="md-bookmarks" style={leftButtonIconStyle} />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Repositories</Text>
                            </Body>
                            <Right>
                                <Text>{this.props.userInfo.public_repos}</Text>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => {this.props.navigation.push("ColorList")}}>
                            <Left>
                                <Button style={leftButtonStyle}>
                                    <Icon active name="md-git-commit" style={leftButtonIconStyle}  />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Issues</Text>
                            </Body>
                            <Right>
                                <Text></Text>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => {this.props.navigation.push("ColorList")}}>
                            <Left>
                                <Button style={leftButtonStyle}>
                                    <Icon active name="md-git-pull-request" style={leftButtonIconStyle}  />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Pull Requests</Text>
                            </Body>
                            <Right>
                                <Text></Text>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => {this.props.navigation.push("ColorList")}}>
                            <Left>
                                <Button style={leftButtonStyle}>
                                    <Icon active name="md-star" style={leftButtonIconStyle}  />
                                </Button>
                            </Left>
                            <Body>
                                <Text>stars</Text>
                            </Body>
                            <Right>
                                <Text></Text>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => {this.props.navigation.push("ColorList")}}>
                            <Left>
                                <Button style={leftButtonStyle}>
                                    <Icon active name="md-person-add" style={leftButtonIconStyle}  />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Followers</Text>
                            </Body>
                            <Right>
                                <Text>{this.props.userInfo.followers}</Text>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </ParallaxScrollView>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = state => {
    return {
        themeColor: _.get(state, 'theme.color', ''),
        userInfo: state.userInfo
    }
}


export default connect(mapStateToProps)(ViewScreen)