import * as types from '../actions/action-types';
import { Map, List } from 'immutable';

const initialState = Map({
    screen: 0,
    listQuestion: List([{
        numerator: 12,
        denominator: 24
    },{
        numerator: 18,
        denominator: 36
    }])
});

const SimplifyingReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SIMPLIFYING_HOME_SCREEN:
            return state.set('screen', 0);
        case types.SIMPLIFYING_EXAM_SCREEN:
            return state.set('screen', 1);
        default:
    }
    return state;
}

export default SimplifyingReducer;