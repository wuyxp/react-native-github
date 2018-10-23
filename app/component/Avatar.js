/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/23 上午10:24
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Image, View} from "react-native";
import {connect} from 'react-redux'

class Avatar extends Component{
    render() {
        return (
            <View
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    borderColor: this.props.themeColor,
                    borderWidth: 2,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                <Image source={{uri: this.props.avatar_url, width: 80, height: 80}}/>
            </View>
        );
    }

    static PropsType = {
        avatar_url: PropTypes.string.isRequired,
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.theme.color,
    }
};
export default connect(mapStateToProps)(Avatar);