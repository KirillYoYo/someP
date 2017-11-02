import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Alert, StyleSheet, View} from 'react-native'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider} from 'native-base';
import getTheme from '../../native-base-theme/components';
import Colors from '../../native-base-theme/variables/commonColor';
import material from '../../native-base-theme/variables/material';

class Ex extends Component {

    state = {
        fontsAreLoaded: false
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto_medium: require('../../assets/fonts/Roboto-Medium.ttf'),
        });
        this.setState({fontsAreLoaded: true});
    }

    _onPressButton() {
        Alert.alert('You tapped the Button!')
    }

    _onPressMenu() {
        Alert.alert('You tapped the Menu!')
    }

    render() {
        return (
            this.state.fontsAreLoaded ?
                <StyleProvider style={getTheme(material)}>
                    <Container>
                        <Header>
                            <View style={styles.lol}></View>
                            <Left>
                                <Button transparent>
                                    <Icon onPress={this._onPressMenu} name='menu'/>
                                </Button>
                            </Left>
                            <Right>
                                <Body>
                                <Title>Header</Title>
                                </Body>
                            </Right>
                        </Header>
                        <Content>
                            <Text>
                                This is Content Section
                            </Text>
                            <Button onPress={this._onPressButton}>
                                <Text>
                                    Button
                                </Text>
                            </Button>
                        </Content>
                        <Footer>
                            <FooterTab>
                                <Button full>
                                    <Text>Footer</Text>
                                </Button>
                            </FooterTab>
                        </Footer>
                    </Container>
                </StyleProvider>
                : null
        )
    }
}

const styles = StyleSheet.create({
    lol: {
        marginTop: 50
    }
});


Ex.propTypes = {};
Ex.defaultProps = {};

export default Ex;
