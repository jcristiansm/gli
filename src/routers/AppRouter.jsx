import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Courses from '../components/courses/Courses';
import Home from '../components/home/Home';
import Sidebar from '../components/ui/Sidebar';
import Navbar from '../components/ui/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <div className="main-container">
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/cursos" component={Courses} />
            <Route exact path="/" component={Home} />

            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
