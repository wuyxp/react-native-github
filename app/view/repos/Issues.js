/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/24 上午10:47
 * @flow
 */
import React, {Component} from 'react'
import {Container, View, Text, Segment, Button} from 'native-base'
import {connect} from 'react-redux'
import Header,{ LeftReturn } from '../../component/Header'

import BaseComponent from '../../component/BaseComponent'
import ThemeSegment from '../../component/ThemeSegment'
import { isLogin } from '../../common/Utils'

class ViewScreen extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            tabData: [
                {
                    text: 'Open',
                    active: true,
                },{
                    text: 'Closed',
                }
            ]
        };
        const {navigation} = this.props;
        this.repoData = navigation.getParam('repoData');
        console.log(this.repoData);
    }

    async componentDidMount(){
        await super.componentDidMount();
        if(isLogin(this.props.userInfo)){

        }
    }
    changeTab = text => {
        this.setState({
            tabData: this.state.tabData.map(tab => ({...tab, active: tab.text === text}))
        })
    }
    render() {
        return (
            <Container>
                <Header
                    title={this.repoData.name}
                    leftComponent={<LeftReturn/>}
                />
                <ThemeSegment
                    buttons={this.state.tabData}
                    onChangeTab={tab => this.changeTab(tab)}
                />
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return {
        backgroundColor: state.theme.color,
        showItem: state.favorite.showItem,
    }
};
export default connect(mapStateToProps)(ViewScreen)
