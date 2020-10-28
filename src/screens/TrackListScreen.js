import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
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
            <View>
                {state.payload ? (
                    <FlatList
                        keyExtractor={item => item._id}
                        data={state.payload}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
                                >
                                    <ListItem bottomDivider>
                                        <ListItem.Content>
                                            <ListItem.Title>{item.name}</ListItem.Title>
                                        </ListItem.Content>
                                        <ListItem.Chevron/>
                                    </ListItem>
                                </TouchableOpacity>
                            )
                        }}
                    />
                ) : null}
            </View>
        </SafeAreaView>
    );
};

TrackListScreen.navigationOptions = () => {
    return {
    //   headerShown: false,
    title: 'Tracks'
    };
};

const styles = StyleSheet.create({

});

export default TrackListScreen;