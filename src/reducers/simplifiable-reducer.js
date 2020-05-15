import * as types from '../actions/action-types';
import { Map } from 'immutable';

const initialState = Map({
    noQuestions: 2
})

const SimplifiableReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SIMPLIFIABLE_MODIFY_QUESTION:
            return state.set('noQuestions', action.data)
        default:
    }
    return state;
}

export default SimplifiableReducer;