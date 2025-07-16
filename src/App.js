import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calc from './components/calc';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Calc/>} />
  

    </Routes>
    </BrowserRouter>
  );
}

export default App;
