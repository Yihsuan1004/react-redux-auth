import { combineReducers } from "redux";
import projectReducer from './projectReducer';
import  authReducer  from './authReducer'
import { firestoreReducer } from 'redux-firestore'

const reducers = {
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
}
const rootReducer = combineReducers(reducers);

export default rootReducer;