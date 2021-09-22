import { SIGN_IN } from "../actions/AddAction";

const initialState = {
    user: {
        username:"",
        phone_number: 0,
        password:""
    }
}
const singInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN: 
          return {
            ...state,
            user: action.payload
          }
          default:
            return state;
    }
}

export default singInReducer;