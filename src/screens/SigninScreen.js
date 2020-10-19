import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    Appbar,
    Button
} from 'react-native-paper';

const SigninScreen = ({ navigation }) => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content
                    title='Signin Screen'
                />
            </Appbar.Header>
            <View>
            <Text style={{ fontSize: 48 }}>SigninScreen</Text>
            <Button
                mode='outlined'
                onPress={() => navigation.navigate('Signup')}
            >
                Go To Signup
            </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SigninScreen;