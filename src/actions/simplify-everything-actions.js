import * as types from './action-types';

var Home = {
    type: types.SIMPLIFYING_HOME_SCREEN
}

var Exam = {
    type: types.SIMPLIFY_EVERYTHING_EXAM
}

var modifyQuestion = (data) =>({
    type: types.SIMPLIFYING_MODIFY_QUESTION,
    data: data.map(value => ({
        numerator: parseInt(value.numerator),
        denominator: parseInt(value.denominator)
    }))
})

export default {
    Exam, 
    Home,
    modifyQuestion
}