/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/16 上午11:13
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class Item extends Component{
    render() {
        return (
            <Card style={{flex: 0}}>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: this.props.data.owner.avatar_url}} />
                        <Body>
                        <Text>{this.props.data.full_name}</Text>
                        <Text note>{this.props.data.language}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            {this.props.data.description}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Icon name="logo-github" />
                            <Text>{this.props.data.stargazers_count} stars</Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
        );
    }

    static PropsType = {
        data: PropTypes.object,
    }
}