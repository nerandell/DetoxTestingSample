/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Button, View, Image} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            isSecretVisible: false
        };
    }

    toggleVisibility() {
        this.setState({
            isSecretVisible: !this.state.isSecretVisible
        });
    }

    render() {
        return (
            <View testID='mainScreen' style={styles.container}>
                <Button testID='secretButton' style={styles.welcome} onPress={this.toggleVisibility}
                        title={'Press to reveal secret'}/>
                {this.state.isSecretVisible && (
                    <Image
                        testID='secretImage'
                        style={{width: 50, height: 50}}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
