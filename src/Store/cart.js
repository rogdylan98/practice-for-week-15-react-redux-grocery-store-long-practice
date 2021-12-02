
const ADD = 'cart/ADD';

export const addToCart = (id) => {
    return {
        type: ADD,
        id
    }
}
export default function cartReducer(state = {}, action){
    switch(action.type){
        case ADD:
            const newState = {...state};
            if (newState[action.id]) {
                newState[action.id].count++;
            } else {
                newState[action.id] = {
                    id: action.id,
                    count: 1
                }
            }
            return newState;
        default:
            return state;
    }
}
