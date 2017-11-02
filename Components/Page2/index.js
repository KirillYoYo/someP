import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider} from 'native-base';


class Page2 extends Component {
    render() {
        return (
            <Content>
                <Title>Title!</Title>
                <Text>Text</Text>
                <Button onPress={() => {Actions.pop}}>BACK</Button>
            </Content>
        );
    }
}

Page2.propTypes = {};
Page2.defaultProps = {};

export default Page2;
