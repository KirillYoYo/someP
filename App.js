import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import { Container, Button, Text, Title, Spinner } from 'native-base';
import Ex from './Components/Example/ex'

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
            loading && !fontsAreLoaded ?
                <View style={styles.container}>
                    <Text>Loading at 3 sec</Text>
                    <Spinner color='red' />
                    <ActivityIndicator
                        animating={loading}
                        style={{height: 80}}
                        size="large"
                    />
                </View>
                :  <Ex />
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
