import Title from './components/Title';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { CalculatorContainer } from './containers/CalculatorContainer';

function App() {
  const [ version ] = useState(React.version);
  return (
    <div className="App">
      <Title>React Version: {version}</Title>
      <CalculatorContainer />
    </div>
  );
}

export default App;
