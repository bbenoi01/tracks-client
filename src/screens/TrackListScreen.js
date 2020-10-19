import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    Appbar,
    Button
} from 'react-native-paper';

const TrackListScreen = ({ navigation }) => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content
                    title='Track List Screen'
                />
            </Appbar.Header>
            <View>
            <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
            <Button
                mode='outlined'
                onPress={() => navigation.navigate('TrackDetail')}
            >
                Go To Track Detail
            </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default TrackListScreen;