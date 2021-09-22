import { ADD_PLANT } from "../actions/AddAction";

export const initialState = {
    nickname: "", species: "", h20_frequency: ""
}

export const plantReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLANT: {       
            return {
                ...state,
                plants: [...state.plants, action.payload]
            }
        }
        default: {
            return state;
        }
    }
}

export default plantReducer;