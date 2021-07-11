import { combineReducers } from "redux";
import projectReducer from './projectReducer';
import  authReducer  from './authReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from "react-redux-firebase";

const reducers = {
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
}
const rootReducer = combineReducers(reducers);

export default rootReducer;