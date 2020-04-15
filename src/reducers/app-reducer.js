import * as types from '../actions/action-types';
import { Map } from 'immutable';

const initialState = Map({
    screen: 0
});

const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.APP_HOME_SCREEN:
            return state.set('screen', 0);
        case types.APP_STUDENT_SCREEN:
            return state.set('screen', 1);
        case types.APP_LECTURER_SCREEN:
            return state.set('screen', 2);
        default:
    }
    return state;
}

export default AppReducer;