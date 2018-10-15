/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:57
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Container, Content, ListItem, Left, Right, Body, Button, Icon, Text} from 'native-base'
import Header from '../component/Header'

class ViewScreen extends Component {
    render() {
        return (
            <Container>
                <Header
                    title={"My"}
                />
                <Content>
                        <ListItem icon onPress={() => {this.props.navigation.push("ColorList")}}>
                            <Left>
                                <Button style={{ backgroundColor: this.props.themeColor }}>
                                    <Icon active name="film" />
                                </Button>
                            </Left>
                            <Body>
                            <Text>颜色主题</Text>
                            </Body>
                            <Right>
                                <Text>{this.props.themeColor}</Text>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
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