import * as types from '../actions/action-types';
import { Map, List } from 'immutable'

const initialState = Map({
    screen: 0,
    listQuestion: List([
        {
            id: 1,
            numerator: 9,
            denominator: 12,
            type: 0
        },
        {
            id: 2,
            numerator: 10,
            denominator: 15,
            type: 1
        }
    ])
})

const WhenToSimpliFyReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.WHEN_TO_SIMPLIFY_HOME:
            return state.set('screen', 0)
        case types.WHEN_TO_SIMPLIFY_EXAM:
            return state.set('screen', 1)
        case types.WHEN_TO_SIMPLIFY_MODIFY_QUESTION:
            return state.set('listQuestion', List(action.data))
        default:
    }
    return state
}

export default WhenToSimpliFyReducer