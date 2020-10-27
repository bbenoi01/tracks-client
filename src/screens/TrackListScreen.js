import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, ListItem } from 'react-native-elements';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);

    // console.log('list state', state);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <NavigationEvents
                onWillFocus={fetchTracks}
            />
            <Text h3>TrackListScreen</Text>
            <View>
                <FlatList
                    data={state}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => {
                        return (
                            <ListItem
                                title={item.name}
                                chevron
                            />
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

TrackListScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({

});

export default TrackListScreen;