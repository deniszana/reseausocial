import {
    GET_USER,
  } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
    console.log('userReducer',state,  action.type);
    switch (action.type) {
        case GET_USER:
          return action.payload;
        default:
          return state;
    }
}
