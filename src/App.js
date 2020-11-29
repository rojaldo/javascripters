import { Calculator } from './components/calculator/calculator';
import { Heroes } from './components/heroes/heroes';
import { Beers } from './components/beers/beers';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function App() {
  return (
    <Tabs defaultActiveKey="beers" id="uncontrolled-tab-example">
      <Tab eventKey="calculator" title="Calculadora">
        <Calculator></Calculator>
      </Tab>

      <Tab eventKey="heroes" title="Heroes">
        <Heroes></Heroes>
      </Tab>

      <Tab eventKey="beers" title="Cervezas">
        <Beers></Beers>
      </Tab>
    </Tabs>

  );
}

export default App;
