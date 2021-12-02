
const ADD = 'cart/ADD';

export const addToCart = (id) => {
    return {
        type: ADD,
        id
    }
}

const REMOVE = 'cart/REMOVE';

export const removeFromCart = (id) => {
    return {
        type: REMOVE,
        id
    }
}
const UPDATE = 'cart/UPDATE';

export const updateCart = (id, operation) => {
    return {
        type: UPDATE,
        id,
        operation
    }
}

const PURCHASE = 'cart/PURCHASE';

export const purchaseCart = () => {
    return {
        type: PURCHASE
    }
}

export function getProduceInCart(state) {
    const order = state.cart.order;
    return order.map(id => {
        return {
            ...state.cart[id],
            ...state.produce[id]
        }
    })

}
export default function cartReducer(state = {order:[]}, action) {
    let newState = { ...state };
    switch (action.type) {
        case ADD:
            if (newState[action.id]) {
                newState[action.id].count++;
            } else {
                newState[action.id] = {
                    id: action.id,
                    count: 1
                }
                newState.order.push(action.id);
            }
            return newState;
        case REMOVE:
            if (newState[action.id]) {
                delete newState[action.id];
                newState.order = newState.order.filter(el => {
                    return el !== action.id;
                })
            }

            return newState;
        case UPDATE:
            if (action.operation === 'inc') newState[action.id].count++;
            if (action.operation === 'dec') {
                if (newState[action.id].count === 1) {
                    delete newState[action.id];
                    newState.order = newState.order.filter(el => {
                        return el !== action.id;
                    })
                } else {
                    newState[action.id].count--;
                }
            }
            return newState;
        case PURCHASE:
            return {};
        // If it returns just the original state, does that avoid a re-render?
        default:
            return state;
    }
}
