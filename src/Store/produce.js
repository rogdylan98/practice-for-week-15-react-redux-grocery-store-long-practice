import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

// This is the action creator that returns the action
export const populateProduce = () => {
    console.log('ACTION')
    return {
        type: POPULATE,
        produce: produceData
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
        default:
            return state;
    }
}
