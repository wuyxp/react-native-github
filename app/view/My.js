/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:57
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Image, Animated, DeviceInfo, Dimensions ,findNodeHandle} from 'react-native'
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
    render() {
        return (
            <Container>
                <Header
                    title={"我的"}
                />
                <Content>
                    {/* // TODO 无法实现下拉图片放大 */}
                    <ParallaxScrollView
                        style={{ flex: 1, backgroundColor: 'hotpink', overflow: 'hidden' }}
                        renderBackground={() =>
                            <View>
                                <Image
                                    ref={(img) => { this.backgroundImage = img; }}
                                    source={Assets.via()}
                                    style={{width: window.width, height: 350}}
                                    onLoadEnd={this.imageLoaded.bind(this)}
                                />
                                <BlurView
                                    style={{
                                        position: "absolute",
                                        top: 0, left: 0, bottom: 0, right: 0,
                                    }}
                                    viewRef={this.state.viewRef}
                                    blurType="light"
                                    blurAmount={10}
                                >
                                    <View style={{
                                        position: 'absolute',
                                        bottom: 20,
                                        width: 100,
                                        height: 100,
                                        left: (Dimensions.get('window').width - 100)/ 2,
                                        borderRadius: 50,
                                        borderColor: this.props.themeColor,
                                        borderWidth: 2,
                                        backgroundColor: '#ffffff',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Icon name={'md-person'} style={{color: this.props.themeColor, fontSize: 50}}/>
                                    </View>
                                </BlurView>
                            </View>
                        }
                        // renderFixedHeader={() => <Text style={{ textAlign: 'right', color: 'white', padding: 5, fontSize: 20 }}>Hello</Text>}
                        parallaxHeaderHeight={ 350 }
                        backgroundSpeed={10}
                    >
                        <ListItem icon onPress={() => {this.props.navigation.push("ColorList")}}>
                            <Left>
                                <Button style={{ backgroundColor: this.props.themeColor }}>
                                    <Icon active name="md-bookmarks" />
                                </Button>
                            </Left>
                            <Body>
                            <Text>Repositories</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => {this.props.navigation.push("ColorList")}}>
                            <Left>
                                <Button style={{ backgroundColor: this.props.themeColor }}>
                                    <Icon active name="md-git-commit" />
                                </Button>
                            </Left>
                            <Body>
                            <Text>Issues</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => {this.props.navigation.push("ColorList")}}>
                            <Left>
                                <Button style={{ backgroundColor: this.props.themeColor }}>
                                    <Icon active name="md-git-pull-request" />
                                </Button>
                            </Left>
                            <Body>
                            <Text>Pull Requests</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => {this.props.navigation.push("ColorList")}}>
                            <Left>
                                <Button style={{ backgroundColor: this.props.themeColor }}>
                                    <Icon active name="md-star" />
                                </Button>
                            </Left>
                            <Body>
                            <Text>stars</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => {this.props.navigation.push("ColorList")}}>
                            <Left>
                                <Button style={{ backgroundColor: this.props.themeColor }}>
                                    <Icon active name="md-person-add" />
                                </Button>
                            </Left>
                            <Body>
                            <Text>Followers</Text>
                            </Body>
                            <Right>
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
        themeColor: _.get(state, 'theme.color', '')
    }
}


export default connect(mapStateToProps)(ViewScreen)