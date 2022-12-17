import './App.css';
import Text from './Text';
import { useContext } from 'react';
import { globalContext } from './context/Context';


function App() {

  const { mode } = useContext(globalContext)

  return (
    <div className={mode === true ? "show" : ''}>
      <Text />
    </div>
  );
}

export default App;
