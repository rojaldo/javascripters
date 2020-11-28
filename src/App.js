import { Calculator } from './components/calculator/calculator';
import { Heroes } from './components/heroes/heroes';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function App() {
  return (
    <Tabs defaultActiveKey="heroes" id="uncontrolled-tab-example">
      <Tab eventKey="calculator" title="Calculadora">
        <Calculator></Calculator>
      </Tab>
      <Tab eventKey="heroes" title="Heroes">
        <Heroes></Heroes>
      </Tab>
    </Tabs>

  );
}

export default App;
