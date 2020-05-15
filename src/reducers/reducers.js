import {combineReducers} from 'redux';
import AppReducer from './app-reducer';
import StudentReducer from './student-reducer';
import SimplifyingReducer from './simplifying-reducer';
import WhenToSimpliFyReducer from './when-to-simplify-reducers';
import StepByStepReducer from './step-by-step-reducer';
import SimplifyEverythingReducer from './simplify-everything-reducer';
import LecturerReducer from './lecturer-reducer';
import SimplifiableReducer from './simplifiable-reducer';

var reducers = combineReducers({
    App: AppReducer,
    Student: StudentReducer,
    Simplifying: SimplifyingReducer,
    WhenToSimplify: WhenToSimpliFyReducer,
    StepByStep: StepByStepReducer,
    SimplifyEverything: SimplifyEverythingReducer,
    Lecturer: LecturerReducer,
    Simplifiable: SimplifiableReducer
})

export default reducers;