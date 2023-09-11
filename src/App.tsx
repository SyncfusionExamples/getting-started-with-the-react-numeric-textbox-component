import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

function App() {
  return (
    <div className="App">
    <NumericTextBoxComponent width='160px' value={10}
    max={100} min={1} step={5} format='000.00'
    decimals={2} validateDecimalOnType={true} showSpinButton={false}
    >

    </NumericTextBoxComponent>
    </div>
  );
}

export default App;
