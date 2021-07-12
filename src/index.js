import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* --redux-- */
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducer/rootReducer';
import thunk from 'redux-thunk';
/* --firebase-- */
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebaseConfig from '../src/config/firebaseConfig'
import firebase from 'firebase/app';
import { isLoaded } from 'react-redux-firebase'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    //set firebase is ready
    reduxFirestore(firebaseConfig),
  )
);

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children
}

const firebaseProps = {
  firebase,
  config: {...firebaseConfig,
              userProfile: 'users',
              useFirestoreForProfile: true},
  dispatch: store.dispatch,
  createFirestoreInstance,
}

document.title = "OurPlan";

ReactDOM.render(
  // <React.StrictMode
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...firebaseProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);


