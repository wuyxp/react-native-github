/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/15 下午2:38
 */
import React, {Component} from 'react'
import { FlatList } from 'react-native'
import {Container, Content, View, Text, Button, Grid, Row, Col, CheckBox} from 'native-base'
import {NavigationActions} from 'react-navigation'
import Header, {LeftReturn} from '../../component/Header'
import {connect} from 'react-redux'

import { changeTheme } from '../../action/theme/changeTheme'

const COLORS = [
    // "33",
    "66",
    "99",
    "CC",
]
const generatorColors = (Colors, length) => {
    const newColors = [];
    const result = [];
    for (let x = 0; x < Colors.length; x++) {
        for (let y = 0; y < Colors.length; y++) {
            for (let z = 0; z < Colors.length; z++) {
                newColors.push(Colors[x] + Colors[y] + Colors[z])
            }
        }
    }

    for(let i =0;i <(newColors.length/length); i++){
        result.push(newColors.slice(i*length, i*length+length));
    }
    return result;
}

class ColorList extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: generatorColors(COLORS,3)
        }
    }

    changeTheme = color => {

        this.props.navigation.dispatch(NavigationActions.navigate({
            routerName: "ColorList",
            params: {
                theme: color
            }
        }));
        console.log('-----changeTheme-------');
        console.log(this.props.navigation);
        this.props.changeTheme(color);
    }

    _renderItem = ({item}) => {
        return (
            <Row>
                {item.map((col, index) => {
                    return (
                        <Col
                            key={index}
                            style={{backgroundColor:"#"+col, height:100, alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => this.changeTheme("#"+col)}
                        >
                            <View style={{backgroundColor:'#ffffff'}}>
                                <Text>{col}</Text>
                            </View>
                        </Col>
                    )
                })}
            </Row>
        )

    }
    render() {
        return (
            <Container>
                <Header
                    leftComponent={<LeftReturn/>}
                    title={"颜色主题"}
                />
                <Content>
                    <FlatList
                        data={this.state.colors}
                        renderItem={this._renderItem}
                        keyExtractor={() => Math.random()+""}
                    />
                </Content>
            </Container>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeTheme: color => dispatch(changeTheme(color))
    }
}

export default connect(null, mapDispatchToProps)(ColorList)