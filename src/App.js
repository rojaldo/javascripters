import { Calculator } from './components/calculator/calculator';
import { Heroes } from './components/heroes/heroes';
import { Beers } from './components/beers/beers';
import { Apod } from './components/apod/apod';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function App() {
  return (
    <Tabs defaultActiveKey="apod" id="uncontrolled-tab-example">
      <Tab eventKey="calculator" title="Calculadora">
        <Calculator></Calculator>
      </Tab>

      <Tab eventKey="heroes" title="Heroes">
        <Heroes></Heroes>
      </Tab>

      <Tab eventKey="beers" title="Cervezas">
        <Beers></Beers>
      </Tab>
      <Tab eventKey="apod" title="Apod">
        <Apod></Apod>
      </Tab>
    </Tabs>

  );
}

export default App;
