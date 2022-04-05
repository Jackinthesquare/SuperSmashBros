import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';
import { useState } from 'react'

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
       <Fighter name={'Roy'} color={'red'} setVisible={setVisible} />
       <Fighter name={'Fox'} color={'green'} />
       <Fighter name={'Ganondorf'} color={'purple'} />
       <Fighter name={'Sheik'} color={'lightskyblue'} />
      </div>
      <FighterScreen isVisible={visible} setVisible={setVisible} />
    </div>
  );
}

export default App;
