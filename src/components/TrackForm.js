import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return (
        <View>
            <Spacer>
                <Input
                    value={name}
                    onChangeText={changeName}
                    placeholder='Enter Name'
                />
            </Spacer>
            {recording ? (
                <Spacer>
                    <Button
                        title='Stop'
                        onPress={stopRecording}
                    />
                </Spacer>
            ) : (
                <Spacer>
                    <Button
                        title='Start Recording'
                        onPress={startRecording}
                    />
                </Spacer>
            )}
            {!recording && locations.length ? (
                <Spacer>
                    <Button
                        title='Save Recording'
                        onPress={saveTrack}
                    />
                </Spacer>
            ) : null}
        </View>
    );
};

export default TrackForm;