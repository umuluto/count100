import * as types from './action-types';

var Home = {
    type: types.WHEN_TO_SIMPLIFY_HOME
}

var Exam = {
    type: types.WHEN_TO_SIMPLIFY_EXAM
}

var modifyQuestion = (data) => ({
    type: types.WHEN_TO_SIMPLIFY_MODIFY_QUESTION,
    data: data.map(value => ({
        id: value.id,
        numerator: parseInt(value.numerator),
        denominator: parseInt(value.denominator),
        type: parseInt(value.type)
    }))
})

export default {
    Home,
    Exam,
    modifyQuestion
}