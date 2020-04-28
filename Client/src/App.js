import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lomakkeet from "./komponentit/reitit/Lomakkeet"
import Tilastot from "./komponentit/reitit/Tilastot"
import Lista from "./komponentit/reitit/Lista"
import Lomake from "./komponentit/reitit/Lomake"
import MainNavigation from './komponentit/menu/MainNavigation';
import Etusivu from './komponentit/etusivu/Etusivu';


function App() {
  return (
    <div className="App">
    <Router>
     <MainNavigation />
     <main>
      <Switch>
          <Route exact path='/' component={Etusivu} />
          <Route exact path="/lomakkeet" component={Lomakkeet}/>
          <Route path="/tilastot" component={Tilastot}/>
          <Route path="/lista" component={Lista}/>
          <Route path="/lomake" component={Lomake}/>
      </Switch>
      </main>
    </Router>
    </div>
  );
}

export default App;
