import React, { useContext } from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');
    const track = state.payload.find(t => t._id === _id);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>{track.name}</Text>
        </SafeAreaView>
    );
};

TrackDetailScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({

});

export default TrackDetailScreen;