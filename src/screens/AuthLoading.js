<<<<<<< HEAD
import React from 'react'
import {
    ActivityIndicator,
    Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { styles } from '../component/styles';
import { Container } from 'native-base';

export default class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this.Storage()
    }
    Storage = async () => {
        const userToken = await AsyncStorage.getItem('token')
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }
    render() {
        return (
            <Container style={[styles.activity]}>
                <ActivityIndicator size='large' />
                <Text>Please Wait...</Text>
            </Container>
        )
    }
}
=======
import React from 'react'
import {
    ActivityIndicator,
    Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { styles } from '../component/styles';
import { Container } from 'native-base';

export default class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this.Storage()
    }
    Storage = async () => {
        const userToken = await AsyncStorage.getItem('token')
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }
    render() {
        return (
            <Container style={[styles.activity]}>
                <ActivityIndicator size='large' />
                <Text>Please Wait...</Text>
            </Container>
        )
    }
}
>>>>>>> 07401726b62b74ead77bd4eb6f04c3e3146034c4
