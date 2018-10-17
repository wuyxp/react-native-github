/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/17 上午11:31
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Container, Content, Button, Icon, Text, Item, Input, Form} from 'native-base'
import Header,{ LeftReturn } from '../../component/Header'

class ViewScreen extends Component {
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
                            <Input placeholder='请输入账号'/>
                            <Icon name='checkmark-circle' />
                        </Item>
                        <Item error={true}>
                            <Icon active name='ios-lock' />
                            <Input placeholder='请输入密码'/>
                            <Icon active name='ios-eye' />
                        </Item>
                        <Button block rounded style={{backgroundColor: this.props.themeColor}}>
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