/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/24 上午10:47
 */
import React, {Component} from 'react'
import {Container, View, Text, Segment, Button} from 'native-base'
import {connect} from 'react-redux'
import Header from '../../component/Header'

import BaseComponent from '../../component/BaseComponent'
import { isLogin } from '../../common/Utils'

class ViewScreen extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
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
    render() {
        return (
            <Container>
                <Header
                    title={this.repoData.name}
                />
                <Segment>
                    <Button first active={true}>
                        <Text>Open</Text>
                    </Button>
                    <Button last>
                        <Text>Closed</Text>
                    </Button>
                </Segment>
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
