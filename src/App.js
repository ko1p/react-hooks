import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Navbar} from "./components/Navbar"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Profile} from "./pages/Profile"
import {AlertState} from "./context/alert/AlertState";
import {GitHubState} from "./context/github/GitHubState"

function App() {
  return (
      <GitHubState>
          <AlertState>
              <BrowserRouter>
                  <Navbar />
                  <div className="container pt-4">
                      <Switch>
                          <Route path="/" exact component={Home} />
                          <Route path="/about" component={About} />
                          <Route path="/profile/:name" component={Profile} />
                      </Switch>
                  </div>
              </BrowserRouter>
          </AlertState>
      </GitHubState>
  );
}

export default App;
