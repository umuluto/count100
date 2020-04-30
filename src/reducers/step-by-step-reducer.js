import * as types from '../actions/action-types';
import { Map, List } from 'immutable';

const initialState = Map({
    screen: 0
});

const StepByStepReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.STEP_BY_STEP_HOME:
            return state.set('screen', 0);
        case types.STEP_BY_STEP_EXAM:
            return state.set('screen', 1);
        default:
    }
    return state;
}

export default StepByStepReducer;