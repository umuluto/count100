import {combineReducers} from 'redux';
import AppReducer from './app-reducer';
import StudentReducer from './student-reducer';
import SimplifyingReducer from './simplifying-reducer';

var reducers = combineReducers({
    App: AppReducer,
    Student: StudentReducer,
    Simplifying: SimplifyingReducer
})

export default reducers;