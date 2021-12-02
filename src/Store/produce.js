import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

// This is the action creator that returns the action
export const populateProduce = () => {
    // console.log('ACTION')
    return {
        type: POPULATE,
        produce: produceData
    }
}

const LIKE_UNLIKE = '/produce/LIKE_UNLIKE'

export const likeUnlike = (id) => {
    return {
        type: LIKE_UNLIKE,
        id
    }
}

export default function produceReducer(state = {}, action) {
    console.log('PRODUCE REDUCER')
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach(el => {
                newState[el.id] = el;
            })
            return newState;
        case LIKE_UNLIKE:
            const likeState = { ...state };
            // console.log(likeState);
            likeState[action.id].liked = !likeState[action.id].liked;
            return likeState;
        default:
            return state;
    }
}
