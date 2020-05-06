import * as types from '../actions/action-types';
import {Map, List} from 'immutable';

const initialState = Map({
    screen: 0,
    listQuestion: List([{
        id: 1,
        numerator: 8,
        denominator: 6
    },{
        id: 2,
        numerator: 1,
        denominator: 6
    },{
        id: 3,
        numerator: 2,
        denominator: 6
    },{
        id: 4,
        numerator: 3,
        denominator: 6
    },{
        id: 5,
        numerator: 4,
        denominator: 6
    },{
        id: 6,
        numerator: 5,
        denominator: 6
    },{
        id: 7,
        numerator: 9,
        denominator: 6
    }])
});

const SimplifyEverythingReducer = (state = initialState, action) => {
        switch(action.type) {
        case types.SIMPLIFY_EVERYTHING_HOME:
            return state.set('screen', 0)
        case types.SIMPLIFY_EVERYTHING_EXAM:
            return state.set('screen', 1)
        case types.SIMPLIFY_EVERYTHING_MODIFY_QUESTION:
            return state.set('listQuestion', List(action.data))
        default:
    }
    return state;
}

export default SimplifyEverythingReducer;