import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/layout/Navigation'
import { Dashboard } from './components/dashboard/Dashboard'
import{ SignIn } from './components/auth/SignIn'
import './App.sass'
import { ProjectDetail } from './components/projects/ProjectDetail';
import { SignUp } from './components/auth/SignUp';
import { CreatProject } from './components/projects/CreatProject'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetail} />
          <Route exact path='/signIn' component={ SignIn } />
          <Route exact path='/signUp' component={ SignUp } />
          <Route exact path='/createProject' component={ CreatProject } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
