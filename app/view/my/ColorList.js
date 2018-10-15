/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/15 下午2:38
 */
import React,{Component} from 'react'
import { Container, Content, View, Text } from 'native-base'
import Header,{LeftReturn} from '../../component/Header'
import {connect} from 'react-redux'

class ColorList extends Component{

    render() {
        return (
            <Container>
                <Header
                    leftComponent={<LeftReturn/>}
                    title={"颜色主题"}
                />
                <Content>
                    <View><Text>abc</Text></View>
                </Content>
            </Container>
        );
    }
}
export default connect()(ColorList)