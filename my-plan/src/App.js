import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Routes
} from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectsDetails from './components/projects/ProjectsDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/project/:id' element={<ProjectsDetails />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
