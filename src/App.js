
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    NavLink
} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import SignupPage from './SignupPage';
import TodosPage from './TodosPage';

export default class App extends Component {
  render() {
      return (
          <div>
              <Router>
                  <Switch>
                      <Route 
                          path="/" 
                          exact
                          render={(routerProps) => <HomePage {...routerProps} />} 
                      />
                      <Route 
                          path="/login" 
                          exact
                          render={(routerProps) => <LoginPage {...routerProps} />} 
                      />
                      <Route 
                        path="/signup" 
                        exact
                        render={(routerProps) => <SignupPage {...routerProps} />} 
                      />
                      <Route 
                        path="/todos" 
                        exact
                        render={(routerProps) => <TodosPage {...routerProps} />} 
                      />
                  </Switch>
              </Router>
          </div>
      )
  }
}


