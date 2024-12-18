
import './App.css'
import Comp1 from './components/Comp1';
import { CounterProvider } from './context/CounterContext';

function App() {
  return (
    <CounterProvider>
      <Comp1 />
    </CounterProvider>
  )
}

export default App
