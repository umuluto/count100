import * as types from './action-types';

var Simplifying = {
    type: types.LECTURER_SIMPLIFY
}

var WhenToSimplify = {
    type: types.LECTURER_WHEN_TO_SIMPLIFY
}

var StepByStep = {
    type: types.LECTURER_STEP_BY_STEP
}

var SimplifyEverything = {
    type: types.LECTURER_SIMPLIFY_EVERYTHING
}

var Simplifiable = {
    type: types.LECTURER_SIMPLIFIABLE
}

export default {
    Simplifying,
    WhenToSimplify,
    StepByStep,
    SimplifyEverything,
    Simplifiable
}