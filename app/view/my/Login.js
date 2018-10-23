/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/17 上午11:31
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import GitHub from  'github-api'
import {findNodeHandle, Image, View, Dimensions} from "react-native";
import {Container, Content, Button, Icon, Text, Item, Input, Form, Toast} from 'native-base'
import { BlurView, VibrancyView } from 'react-native-blur';

import Header,{ LeftReturn } from '../../component/Header'
import Assets from "../../assets";

import {login} from '../../action/userInfo/login'
import {userInfo} from "../../reducer/userInfo";

import {login as account_login} from '../../action/account/login'

class ViewScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewRef: null,
            hiddenPassWord: true,
            showToast: false,
            isLoginIng: false,
            formInput: {
                username: '',
                password: '',
            },
        }
    }
    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }

    loginGithub = () => {
        const {username, password} = this.state.formInput;
        this.setState(() => ({
            isLoginIng: true,
        }));
        if(this.state.isLoginIng) return false;
        this.github = new GitHub({
            username,
            password,
        });
        if(username == '' || password == ''){
            Toast.show({
                text: '用户名和密码不能为空(暂时不支持使用邮箱登录)',
                buttonText: 'close',
                type: 'danger',
            });
            this.setState({
                isLoginIng: false,
            });
            return false;
        }
        this.github.getUser(username).getProfile().then(result => {
            console.log('result: --------------------');
            console.log(result);
            Toast.show({
                text: '登录成功',
                type: 'success'
            });
            this.props.login(result.data);
            this.props.account_login({
                username,
                password,
            });
            setTimeout(() => {
                this.props.navigation.goBack();
            }, 300)
        }).catch(err => {
            console.log('error: --------------------');
            console.log(err);
            Toast.show({
                text: '登录失败，请输入正确的用户名和密码(暂时不支持使用邮箱登录)',
                buttonText: 'close',
                type: 'danger',
            })
        }).finally(() => {
            this.setState({
                isLoginIng: false,
            })
        })
    }
    setFormInput = (key, value) => {
        const formInput = this.state.formInput;
        formInput[key] = value;
        this.setState({
            formInput,
        })
    };
    toggleEye = () => {
        this.setState({
            hiddenPassWord: !this.state.hiddenPassWord
        })
    }
    render() {
        return (
            <Container>
                <Header
                    title={"登录"}
                    leftComponent={<LeftReturn/>}
                />
                <Content style={{flex: 1}}>
                    <Image
                        ref={(img) => { this.backgroundImage = img; }}
                        source={Assets.bj()}
                        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height, position:'absolute'}}
                        onLoadEnd={this.imageLoaded.bind(this)}
                    />
                    <BlurView
                        style={{
                            position: "absolute",
                            top: 0, left: 0, bottom: 0, right: 0,
                            width: Dimensions.get('window').width, height: Dimensions.get('window').height,
                        }}
                        viewRef={this.state.viewRef}
                        blurType="xlight"
                        blurAmount={10}
                    />

                    <Form style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                    }}>
                        
                        <Icon name='logo-github' style={{textAlign: 'center', fontSize: 80, marginTop: 50}} />
                        <Item success={false} style={{marginTop: 30}}>
                            <Icon name='md-people' />
                            <Input placeholder='username' value={this.state.username} onChangeText={value => this.setFormInput('username', value)} />
                        </Item>
                        <Item error={false} style={{marginTop: 10}}>
                            <Icon  name='ios-lock' />
                            <Input placeholder='password' value={this.state.password} onChangeText={value => this.setFormInput('password', value)} secureTextEntry={this.state.hiddenPassWord} />
                            <Icon active name={this.state.hiddenPassWord ? 'ios-eye-off' : 'ios-eye'} onPress={this.toggleEye} />
                        </Item>
                        <Button disabled={this.state.isLoginIng} block rounded style={{backgroundColor: this.props.themeColor, marginTop: 50}} onPress={this.loginGithub}>
                            <Text>LOGIN</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = state => {
    return {
        themeColor: _.get(state, 'theme.color', '')
    }
};
const mapDispatchToProps = dispatch => {
    return {
        login: userInfo => dispatch(login(userInfo)),
        account_login: account => dispatch(account_login(account)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewScreen)