/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/23 上午10:51
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Body, Button, Icon, Left, ListItem, Right, Text} from "native-base";

class Avatar extends Component{
    render() {
        const leftButtonStyle = {backgroundColor: this.props.themeColor, width: 25, height: 25};
        const leftButtonIconStyle = {fontSize: 15};
        return (
            <ListItem icon onPress={this.props.onPress}>
                <Left>
                    <Button style={leftButtonStyle}>
                        <Icon active name={this.props.icon} style={leftButtonIconStyle}/>
                    </Button>
                </Left>
                <Body>
                <Text>{this.props.text}</Text>
                </Body>
                <Right>
                    <Text>{this.props.tipText}</Text>
                    <Icon active name="arrow-forward"/>
                </Right>
            </ListItem>
        );
    }

    static PropsType = {
        onPress: PropTypes.func,
        icon: PropTypes.string,
        text: PropTypes.string,
        tipText: PropTypes.string,
    }
    static defaultProps = {
        onPress: () => {},
        icon: "",
        text: "",
        tipText: "",
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.theme.color,
    }
};
export default connect(mapStateToProps)(Avatar);