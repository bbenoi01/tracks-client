import createDataContext from './createDataContext';
import trackerApi from '../api/trackerApi';

const trackReducer = (action, state) => {
    const { type, payload } = action;

    switch (type) {
        case ('FETCH_TRACKS'): {
            // console.log('my payload', payload);
            return {
                ...state,
                tracks: payload
            }
        }
        default:
            return state
    }
};

const fetchTracks = (dispatch) => {
    return async () => {
        const res = await trackerApi.get('/tracks');
        dispatch({
            type: 'FETCH_TRACKS',
            payload: res.data
        })
    };
};

const createTrack = (dispatch) => {
    return async (name, locations) => {
        await trackerApi.post('/tracks', { name, locations });
    };
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    {  }
);