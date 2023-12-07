

import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App=()=> {

  const apiKey= "3faf3ee5333e4417b7295bcb357da07b"
  const pageSize =5;
  const [progress,setProgress]=useState(0);
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
            <Route exact  path='/' element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>}/>
            <Route exact  path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
            <Route exact  path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize}  key="entertainment" country="in" category="entertainment"/>}/>
            <Route exact  path='/general' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="in" category="general"/>}/>
            <Route exact  path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize}  country="in" category="health"/>}/>
            <Route exact  path='/science' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science"  country="in" category="science"/>}/>
            <Route exact  path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize}  key="sports" country="in" category="sports"/>}/>
            <Route exact  path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology"  country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
}
export default App; 