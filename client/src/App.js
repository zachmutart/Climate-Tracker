import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import NavBar from './components/NavBar/NavBar'
import './App.css'

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={ Join } />
                <Route path="/chat" component={ Chat } />
            </Switch>
        </Router>
    );
}

export default App;
