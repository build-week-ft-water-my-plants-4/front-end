export const ADD_PLANT = "ADD_PLANT";
export const SIGN_IN = "SIGN_IN";

export const addPlant = (plant) => {
    return({type:ADD_PLANT, payload: plant});
}

export const signIn = (user) => {
    return({type:SIGN_IN, payload: user});
}