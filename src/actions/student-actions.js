import * as types from './action-types';

var Home = {
    type: types.STUDENT_HOME_SCREEN
}

var SimplifyingFraction = {
    type: types.STUDENT_SIMPLIFYING_FRACTION
}

var WhenToSimplify = {
    type: types.STUDENT_WHEN_TO_SIMPLIFY
}

var StepByStep = {
    type: types.STUDENT_STEP_BY_STEP
}

var SimplifyEverything = {
    type: types.STUDENT_SIMPLIFY_EVERTHING
}

var Ending = {
    type: types.STUDENT_ENDING_SCREEN
}

export default {
    Home,
    SimplifyingFraction,
    Ending,
    WhenToSimplify,
    StepByStep,
    SimplifyEverything
}