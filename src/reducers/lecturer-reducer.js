import * as types from '../actions/action-types';
import { Map } from 'immutable';

const initialState = Map({
    screen: 0
})

const LecturerReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LECTURER_SIMPLIFY:
            return state.set('screen', 0)
        case types.LECTURER_STEP_BY_STEP:
            return state.set('screen', 2)
        case types.LECTURER_SIMPLIFY_EVERYTHING:
            return state.set('screen', 3);
        case types.LECTURER_WHEN_TO_SIMPLIFY:
            return state.set('screen', 4);
        default:
    }
    return state;
}

export default LecturerReducer;