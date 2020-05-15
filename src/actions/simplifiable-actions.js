import * as types from './action-types';

var modifyQuestion = (value) => ({
    type: types.SIMPLIFIABLE_MODIFY_QUESTION,
    data: value
})

export default modifyQuestion;