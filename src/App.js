import './App.css';
import Navigator from './Navigator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigator/>
      <Routes>
        <Route exact path='/eco-living/' element={<Landing/>}/>
        <Route path='/eco-living/about' element={<About/>}/>
        <Route path='/eco-living/contact' element={<Contact/>}/>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
