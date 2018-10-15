/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/12 下午2:55
 */
import React, {Component} from 'react'
import {Container, View, Text} from 'native-base'
import Header from '../component/Header'

export default class ViewScreen extends Component {
    render() {
        return (
            <Container>
                <Header
                    title={"Trending"}
                />
            </Container>
        );
    }
}