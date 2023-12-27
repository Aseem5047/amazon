import * as types from './actionTypes'

const initialState = {
    loading: false,
    basket: [],
    user: null,
    error: null,
};

const basketReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.ADD_TO_BASKET:
            const newBasket = [...state.basket, action.payload]
            return {
                ...state, basket: newBasket
            };

        case types.REMOVE_FROM_BASKET:
            let updatedBasket = [...state.basket];
            const index = state.basket.findIndex((item) => item.id === action.payload);
            if (index >= 0) {
                updatedBasket.splice(index, 1);
            }
            return {
                ...state, basket: updatedBasket
            };

        case types.SET_BASKET_EMPTY:
            return {
                ...state, basket: []
            }

        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
            return { ...state, loading: true, };

        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return { ...state, loading: false, user: action.payload, };

        case types.LOGOUT_SUCCESS:
            localStorage.removeItem('address')
            return { ...state, user: null, }

        case types.SET_USER:
            return { ...state, user: action.payload }

        case types.REGISTER_FAILURE:
        case types.LOGIN_FAILURE:
        case types.LOGOUT_FAILURE:
            localStorage.removeItem('address')
            return { ...state, loading: false, error: action.payload, };
        default:
            return state;
    }
};

export default basketReducer;