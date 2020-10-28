import React, { useContext } from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');
    const track = state.payload.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>{track.name}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
            >
                <Polyline
                    coordinates={track.locations.map(loc => loc.coords)}
                />
            </MapView>
        </SafeAreaView>
    );
};

// TrackDetailScreen.navigationOptions = () => {
//     return {
//       headerShown: false,
//     };
// };

const styles = StyleSheet.create({
    map: {
        height: 200
    }
});

export default TrackDetailScreen;