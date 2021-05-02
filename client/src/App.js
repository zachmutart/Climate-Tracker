import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import MapView from './components/MapView/MapView'
import Landing from './components/Landing/Landing'
import NavBar from './components/NavBar/NavBar'
import './App.css'

/**
 * App component -
 * 
 * The main component for the web application. The App
 * component is placed at the root of the index.html file in
 * the public directory when called by the index.js file.
 * 
 */
const App = () => {

    // Return JSX (Router) the for App component
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

// Export the App Component
export default App;
