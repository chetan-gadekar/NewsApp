// api-key=3faf3ee5333e4417b7295bcb357da07b

import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
  


export default class App extends Component {

  pageSize =5;
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
            <Route exact  path='/' element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact  path='/business' element={<News key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
            <Route exact  path='/entertainment' element={<News pageSize={this.pageSize}  key="entertainment" country="in" category="entertainment"/>}/>
            <Route exact  path='/general' element={<News pageSize={this.pageSize} key="general" country="in" category="general"/>}/>
            <Route exact  path='/health' element={<News key="health" pageSize={this.pageSize}  country="in" category="health"/>}/>
            <Route exact  path='/science' element={<News pageSize={this.pageSize} key="science"  country="in" category="science"/>}/>
            <Route exact  path='/sports' element={<News pageSize={this.pageSize}  key="sports" country="in" category="sports"/>}/>
            <Route exact  path='/technology' element={<News pageSize={this.pageSize} key="technology"  country="in" category="technology"/>}/>
        </Routes>
        {/* <Route element={<News pageSize={this.pageSize} country="in" category="science"/>}/> */}
        </Router>
      </div>
    )
  }
}


