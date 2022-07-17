import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
// import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    
    <BrowserRouter>
    <div >
    
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
