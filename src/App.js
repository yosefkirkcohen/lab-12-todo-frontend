
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

  state = {
    token: localStorage.getItem('TOKEN') || ''
  }

  handleTokenChange = (token) => {
    localStorage.setItem('TOKEN', token)
    this.setState({token: token})
  }

  render() {
      return (
          <div>
              <Router>
                <header>
                  <NavLink to='/' >Home</NavLink>
                  <NavLink to='/login' >Login</NavLink>
                  <NavLink to='/signup' >Signup</NavLink>
                  <NavLink to='/todos' >Todos</NavLink>
                </header>
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
                        render={(routerProps) => <SignupPage handleTokenChange={this.handleTokenChange}
                          {...routerProps} />} 
                      />
                      <Route 
                        path="/todos" 
                        exact
                        render={(routerProps) => 
                            <TodosPage token={this.state.token}
                                      {...routerProps} />} 
                      />
                  </Switch>
              </Router>
          </div>
      )
  }
}


