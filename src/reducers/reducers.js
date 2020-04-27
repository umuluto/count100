import {combineReducers} from 'redux';
import AppReducer from './app-reducer';
import StudentReducer from './student-reducer';
import SimplifyingReducer from './simplifying-reducer';
import WhenToSimpliFyReducer from './when-to-simplify-reducers';
import StepByStepReducer from './step-by-step-reducer';
import LecturerReducer from './lecturer-reducer';

var reducers = combineReducers({
    App: AppReducer,
    Student: StudentReducer,
    Simplifying: SimplifyingReducer,
    WhenToSimplify: WhenToSimpliFyReducer,
    StepByStep: StepByStepReducer,
    Lecturer: LecturerReducer
})

export default reducers;