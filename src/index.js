import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducer/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore , getFirestore ,createFirestoreInstance} from 'redux-firestore';
import {  ReactReduxFirebaseProvider ,getFirebase } from 'react-redux-firebase';
import firebaseConfig from '../src/config/firebaseConfig'
import firebase from 'firebase/app';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebaseConfig),
  )
);

const firebaseProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  // <React.StrictMode
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...firebaseProps}>
      <App />
      </ReactReduxFirebaseProvider>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
