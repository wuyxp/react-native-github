/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/6 下午5:29
 */
import React, {Component} from 'react'
import { WebView } from 'react-native'
import {Container, Content, View, Text, Button, Grid, Row, Col, CheckBox, Icon} from 'native-base'
import BaseComponent from '../../component/BaseComponent'
import Header from '../../component/Header'
import {connect} from 'react-redux'

class ColorList extends BaseComponent {
    constructor(props){
        super(props);
        this.state = {
        }
        this.webView;
        this.navState;

    };
    goBack = () => {
        if(this.navState.canGoBack){
            this.webView.goBack();
        }else{
            this.props.navigation.goBack();
        }
    }
    renderReturnLeft = () => {
        return (
            <Button transparent onPress={() => {this.goBack()}}>
                <Icon name="ios-arrow-back" style={{color: '#ffffff'}}/>
            </Button>
        )

    };
    render() {
        return (
            <Container>
                <Header
                    leftComponent={this.renderReturnLeft()}
                    title={"我的WebBlog"}
                />
                <WebView
                    style={{flex: 1}}
                    source={{uri:"http://wuyxp.github.io/"}}
                    ref={ref => this.webView = ref}
                    onNavigationStateChange={navState => {
                        this.navState = navState
                    }}
                />

            </Container>
        );
    }
}

export default connect(null,null)(ColorList)