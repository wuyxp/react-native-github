/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/31 下午2:15
 * @flow
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Icon, Text, Segment} from "native-base";
type props = {
    themeColor: string,
    buttons: Array<{
        text: string,
        active?: boolean,
    }>,
    onChangeTab: (tab:string) => {},
}
class ThemeSegment extends Component<props>{
    render() {
        return (
            <Segment>
                {
                    this.props.buttons.map((button, index, list) => (
                        <Button
                            active={button.active}
                            style={{
                                backgroundColor: button.active ? this.props.themeColor : '#fff',
                                borderColor: this.props.themeColor,
                            }}
                            onPress={() => this.props.onChangeTab(button.text)}
                            first={index===0}
                            last={index===list.length-1}
                            key={button.text}
                        >
                            <Text style={{
                                color: button.active ? '#fff' : this.props.themeColor,
                            }}>{button.text}</Text>
                        </Button>
                    ))
                }
            </Segment>
        );
    }

    static PropsType = {
    }
    static defaultProps={
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.theme.color,
    }
};
export default connect(mapStateToProps)(ThemeSegment);