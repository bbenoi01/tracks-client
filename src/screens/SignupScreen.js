import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    Appbar,
    Button
} from 'react-native-paper';

const SignupScreen = ({ navigation }) => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content
                    title='Signup Screen'
                />
            </Appbar.Header>
            <View>
            <Text style={{ fontSize: 48 }}>SignupScreen</Text>
            <Button
                mode='outlined'
                onPress={() => navigation.navigate('Signin')}
            >
                Go To Signin
            </Button>
            <Button
                mode='outlined'
                onPress={() => navigation.navigate('mainFlow')}
            >
                Go To Main Flow
            </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SignupScreen;