import { SET_CURRENT_USER, CARGAR_USUARIO, CARGAR_HOTELES, AGREGAR_HOTEL } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {},
    users: {},
    hotel: {},
    hoteles: []
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case CARGAR_USUARIO:
        console.log(action)
            return {
                ...state =
                Object.assign({},
                    state, {
                        isAuthenticated: !isEmpty(action.payload),
                        users: action.payload
                    }
                )
            }
        case CARGAR_HOTELES:
        console.log(action.payload)
            return {
                ...state =
                Object.assign({}, 
                    state, {
                        isAuthenticated: !isEmpty(action.payload),
                        hotel: action.payload
                    }
                )
            }
        case AGREGAR_HOTEL:
        console.log(action.payload)
        let nuevoHotel = action.payload
        let oldState = state.hoteles.slice(0)
            return { 
                ...state = 
                Object.assign({},
                    state, {
                        isAuthenticated: !isEmpty(action.payload),
                        hoteles: [...oldState, nuevoHotel]
                    }
                )
            }
        default: 
            return state;
    }
}