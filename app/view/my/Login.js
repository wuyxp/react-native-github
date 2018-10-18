/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/17 上午11:31
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import GitHub from  'github-api'
import {Container, Content, Button, Icon, Text, Item, Input, Form} from 'native-base'
import Header,{ LeftReturn } from '../../component/Header'

class ViewScreen extends Component {
    constructor(porps){
        super(porps);
        this.state = {
            formInput: {
                username: '',
                password: '',
            },
        }
    }

    loginGithub = () => {
        const {username, password} = this.state.formInput
        this.github = new GitHub({
            username,
            password,
        })
        this.github.getUser(username).getProfile().then(result => {
            console.log('result: --------------------');
            console.log(result);
        }).catch(err => {
            console.log('error: --------------------');
            console.log(err);
        })
    }
    setFormInput = (key, value) => {
        const formInput = this.state.formInput;
        formInput[key] = value;
        this.setState({
            formInput,
        })
    };
    render() {
        return (
            <Container>
                <Header
                    title={"登录"}
                    leftComponent={<LeftReturn/>}
                />
                <Content>
                    <Form style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                    }}>
                        <Item success={true}>
                            <Icon active name='md-people' />
                            <Input placeholder='请输入账号' value={this.state.username} onChangeText={value => this.setFormInput('username', value)} />
                            <Icon name='checkmark-circle' />
                        </Item>
                        <Item error={true}>
                            <Icon active name='ios-lock' />
                            <Input placeholder='请输入密码' value={this.state.password} onChangeText={value => this.setFormInput('password', value)} />
                            <Icon active name='ios-eye' />
                        </Item>
                        <Button block rounded style={{backgroundColor: this.props.themeColor}} onPress={this.loginGithub}>
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
}


export default connect(mapStateToProps)(ViewScreen)