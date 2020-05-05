import * as types from '../actions/action-types';
import {Map, List} from 'immutable';

const initialState = Map({
    screen: 0,
    questions: List([{
        numerator: 10,
        denominator: 25
    },{
        numerator: 27,
        denominator: 81
    },{
        numerator: 96,
        denominator: 60
    },{
        numerator: 8,
        denominator: 30
    },{
        numerator: 6,
        denominator: 8
    },{
        numerator: 100,
        denominator: 175
    },{
        numerator: 5,
        denominator: 25
    }])
});

const SimplifyEverythingReducer = (state = initialState, action) => {
    console.log(action.type, "tham ngan");
    switch(action.type) {
        case types.SIMPLIFY_EVERYTHING_HOME:
            return state.set('screen', 0)
        case types.SIMPLIFY_EVERYTHING_EXAM:
            return state.set('screen', 1)
        case types.SIMPLIFY_EVERYTHING_QUESTION:
            return state.set('questions', List(action.data))
        default:
    }
    return state;
}

export default SimplifyEverythingReducer;