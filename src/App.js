import { Calculator } from './components/calculator/calculator';
import { Heroes } from './components/heroes/heroes';
import { Beers } from './components/beers/beers';
import { Apod } from './components/apod/apod';

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
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <Link to="/calculator" class="nav-link">Calculator</Link>
            </li>
            <li class="nav-item">
              <Link to="/heroes" class="nav-link">Heroes</Link>
            </li>
            <li class="nav-item">
              <Link to="/beers" class="nav-link">Beers</Link>
            </li>
            <li class="nav-item">
              <Link to="/apod" class="nav-link">Apod</Link>
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
          <Route path="/">
            <Apod />
          </Route>
        </Switch>
      </div>
    </Router>

    // <Tabs defaultActiveKey="apod" id="uncontrolled-tab-example">
    //   <Tab eventKey="calculator" title="Calculadora">
    //     <Calculator></Calculator>
    //   </Tab>

    //   <Tab eventKey="heroes" title="Heroes">
    //     <Heroes></Heroes>
    //   </Tab>

    //   <Tab eventKey="beers" title="Cervezas">
    //     <Beers></Beers>
    //   </Tab>
    //   <Tab eventKey="apod" title="Apod">
    //     <Apod></Apod>
    //   </Tab>
    // </Tabs>

  );
}

export default App;
