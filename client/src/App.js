import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import MapView from './components/MapView/MapView'
import Landing from './components/Landing/Landing'
import NavBar from './components/NavBar/NavBar'
import './App.css'

const App = () => {

    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={ Landing } />
                <Route path="/map" exact component={ MapView } />
                <Route path="/join" exact component={ Join } />
                <Route path="/chat" component={ Chat } />
            </Switch>
        </Router>
    )
}

export default App;
