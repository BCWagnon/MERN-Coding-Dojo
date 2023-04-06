import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Number from './Components/Number';
import BlueRed from './Components/BlueRed';

function App() {
  return (
    <BrowserRouter>
    <div className= "App">
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/:number" element={<Number />}/>
        <Route path="/:word/:textColor/:backgroundColor" element={<BlueRed  />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
