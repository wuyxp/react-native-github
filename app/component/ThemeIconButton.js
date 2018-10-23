/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/23 下午12:29
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Icon, Text} from "native-base";

class ThemeIconButton extends Component{
    render() {
        return (
            <Button iconLeft small bordered={this.props.bordered} style={this.props.bordered ? {borderColor: this.props.themeColor} : {backgroundColor: '#ffffff'}} onPress={this.props.onPress}>
                <Icon name={this.props.icon} style={{color: this.props.themeColor}} />
                <Text style={{color: this.props.themeColor ? this.props.themeColor : '#ffffff', fontWeight: 'bold'}}>{this.props.text}</Text>
            </Button>
        );
    }

    static PropsType = {
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bordered: PropTypes.boolean,
        onPress: PropTypes.func,
    }
    static defaultProps={
        bordered: false,
        onPress: () => {},
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.theme.color,
    }
};
export default connect(mapStateToProps)(ThemeIconButton);