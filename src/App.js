import React, { Component } from 'react';
import './App.css';
import AppRouter from './router/AppRoute';

class App extends Component {
  render() {
    return (
      <div className="Apps">
        <AppRouter />
      </div>
    );
  }
}

export default App;
