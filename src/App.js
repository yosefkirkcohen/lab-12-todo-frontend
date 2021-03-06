
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    NavLink,
    Redirect
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

  handleLogout = () => {
    localStorage.clear();
    this.setState({token: ''})
  }

  render() {
      return (
          <div>
              <Router>
                <header>
                  <NavLink exact activeClassName='active' to='/' >Home</NavLink>
                  <NavLink exact activeClassName='active' to='/login' >Login</NavLink>
                  <NavLink exact activeClassName='active' to='/signup' >Signup</NavLink>
                  <NavLink exact activeClassName='active' to='/todos' >Todos</NavLink>
                  <button className='logout' onClick={this.handleLogout}>Logout</button>
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
                          render={(routerProps) => <LoginPage 
                            handleTokenChange={this.handleTokenChange} 
                            {...routerProps} />} 
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
                          this.state.token
                          ?  <TodosPage token={this.state.token}
                                      {...routerProps} />
                          : <Redirect to='/signup' />          
                                    } 
                      />
                  </Switch>
              </Router>
          </div>
      )
  }
}


