import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import Login from './Component/Auth/Login';
import Signup from './Component/Auth/Signup';
import Register from './Component/Auth/Signup';
import NavBar from './Component/Guide/NavBar';
import Footer from './Component/Guide/Footer';

function App() {

  const loggedIn = false;

  return (

    <div className='app-body'>
      <Router>
        <header>
         <NavBar/>
        </header>
        <Routes>
          {!loggedIn ? (
            <>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/Legal-Ease" element={<LandingPage />} />
            </>
          ) : (
            <>
              {/* <Route exact path="/" element={<Homepage />} />
              <Route path="/" element={<Homepage />} /> */}
            </>
          )}
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Register/>} />
          
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
