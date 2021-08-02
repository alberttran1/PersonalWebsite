import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';
import HomePage from './Pages/HomePage';
import Resume from './Pages/Resume';
import ProjectsPage from './Pages/ProjectsPage';



const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={ProjectsPage} />
            </Switch>
        </Router>
    )
}

export default App
