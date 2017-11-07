import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import { Container, Button, Text, Title, Spinner } from 'native-base';
import Ex from './Components/Example/ex'
import AppInner from './AppInner'
import Page2 from './Components/Page2/index'
import { Router, Scene, Stack } from 'react-native-router-flux';

export default class App extends React.Component {

    state = {
        animating: true,
        fontsAreLoaded: false,
        loading: true
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto_medium: require('./assets/fonts/Roboto-Medium.ttf'),
        });
        this.setState({fontsAreLoaded: true});
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
            });

        }, 3 * 1000)
    }


    render() {
        const {loading, fontsAreLoaded} = this.state;

        return (
          <Router>
              <Stack key="root">
                  <Scene key="AppInner" component={AppInner} title="Main"/>
                  <Scene key="Page2" component={Page2} title="Page2"/>
              </Stack>
          </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    lol: {
        marginTop: '10'
    }
});
