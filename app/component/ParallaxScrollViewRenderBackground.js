/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/23 上午10:43
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {findNodeHandle, Image, View} from "react-native";
import {BlurView, VibrancyView} from 'react-native-blur';
import {connect} from 'react-redux'

class RenderBackground extends Component{
    constructor(props) {
        super(props);
        this.state = {
            viewRef: null
        };
    }
    imageLoaded() {
        this.setState({viewRef: findNodeHandle(this.backgroundImage)});
    }
    render() {
        return (
            <View
                style={{position: 'relative', zIndex: 100}}
            >
                <Image
                    ref={(img) => {
                        this.backgroundImage = img;
                    }}

                    source={{uri: this.props.avatar_url}}
                    style={{width: window.width, height: 300}}
                    onLoadEnd={this.imageLoaded.bind(this)}
                />
                <BlurView
                    style={{
                        position: "absolute",
                        top: 0, left: 0, bottom: 0, right: 0,
                        zIndex: 100,
                    }}
                    viewRef={this.state.viewRef}
                    blurType="light"
                    blurAmount={10}
                >

                </BlurView>
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
export default connect(mapStateToProps)(RenderBackground);