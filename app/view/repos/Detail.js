/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/22 下午3:47
 */
import React, {Component} from 'react'
import {Container, View, Text} from 'native-base'
import BaseComponent from '../../component/BaseComponent'
import Header,{LeftReturn} from '../../component/Header'

export default class ViewScreen extends BaseComponent {
    render() {
        return (
            <Container>
                <Header
                    title={"Popular"}
                    leftComponent={<LeftReturn />}
                />
            </Container>
        )
    }
}