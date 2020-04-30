import * as types from './action-types';

var Home = {
    type: types.STEP_BY_STEP_HOME
}

var Exam = {
    type: types.STEP_BY_STEP_EXAM
}

var modifyQuestion = (data) => ({
    type: types.STEP_BY_STEP_MODIFY_QUESTION,
    data: data.map(value => ({
        id: value.id,
        numerator: parseInt(value.numerator),
        denominator: parseInt(value.numerator)
    }))
});

export default {
    Exam,
    Home,
    modifyQuestion
}