import { Calculator } from './components/calculator/calculator';
import { Heroes } from './components/heroes/heroes';
import { Beers } from './components/beers/beers';
import { Apod } from './components/apod/apod';
import { Countries } from './components/countries/countries';
import { Trivial } from './components/trivial/trivial';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (



    <Router>
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/calculator" className="nav-link">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link to="/heroes" className="nav-link">Heroes</Link>
            </li>
            <li className="nav-item">
              <Link to="/beers" className="nav-link">Beers</Link>
            </li>
            <li className="nav-item">
              <Link to="/apod" className="nav-link">Apod</Link>
            </li>
            <li className="nav-item">
              <Link to="/countries" className="nav-link">Countries</Link>
            </li>
            <li className="nav-item">
              <Link to="/trivial" className="nav-link">Trivial</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/heroes">
            <Heroes />
          </Route>
          <Route path="/beers">
            <Beers />
          </Route>
          <Route path="/apod">
            <Apod />
          </Route>
          <Route path="/countries">
            <Countries />
          </Route>
          <Route path="/trivial">
            <Trivial />
          </Route>
          <Route path="/">
            <Trivial />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
