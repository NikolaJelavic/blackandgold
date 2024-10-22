import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UeberMich from './pages/UeberMich';
import Kontakt from './pages/Kontakt';
// import Navbar from './components/Navbar';
// import Workshops from './pages/Workshops';


function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uebermich" element={<UeberMich />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* <Route path="/workshops" element={<Workshops />} /> */}
        </Routes>

        <div className='w-60'>
          
        </div>
      </Router>
      
    </>
  );
}

export default App;
