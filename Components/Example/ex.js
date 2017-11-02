import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Alert, StyleSheet, View} from 'react-native'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider,
    Item, Input} from 'native-base';
import getTheme from '../../native-base-theme/components';
import Colors from '../../native-base-theme/variables/commonColor';
import material from '../../native-base-theme/variables/material';
import { Permissions, Notifications } from 'expo';
import axios from 'axios'


class Ex extends Component {

    state = {
        fontsAreLoaded: false,
        noticeText: ''
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto_medium: require('../../assets/fonts/Roboto-Medium.ttf'),
        });
        this.setState({fontsAreLoaded: true});
    }

    async sendNotice () {
        let token1 = await Notifications.getExpoPushTokenAsync();
        axios({
            method: 'POST',
            url: 'https://exp.host/--/api/v2/push/send',
            data: {
                "key": "value",
                "to": token1 + '',
                "title":"NEW MESSAGE",
                "body": "componentDidMount in main comp"
            }
        }).then(function() {
            //Alert.alert('done')
        }).catch(function(error) {
            //Alert.alert(`There has been a problem with your fetch operation: ${error.message}`);
        });
    }

    _onPressButton() {
        this.sendNotice()
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
                            <Item regular style={styles.lol}>
                                <Input placeholder='Inset message' />
                            </Item>
                            <Button onPress={this._onPressButton.bind(this)}>
                                <Text>Send notice</Text>
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
        marginTop: 50,
        padding: 4
    }
});

const PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

async function registerForPushNotificationsAsync() {
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    t_toket = token

    // POST the token to your backend server from where you can retrieve it to send push notifications.
    return fetch(PUSH_ENDPOINT, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: {
                value: token,
            },
            user: {
                username: 'Brent',
            },
        }),
    });
}


Ex.propTypes = {};
Ex.defaultProps = {};

export default Ex;
