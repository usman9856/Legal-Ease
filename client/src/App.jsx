import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import Login from './Component/Auth/Login';
import RegisterAdvocate from './Component/Auth/SignupAdvocate';
import Register from './Component/Auth/Signup';
import NavBar from './Component/Navigation/NavBar';
import Footer from './Component/Navigation/Footer';
import LoginAdovcate from './Component/Auth/LoginAdvocate';
import LoginAdmin from './Component/Auth/LoginAdmin';
import HomePage from './Component/User/HomePage';
import Chat from './Component/User/Chats';
import Law from './Component/ReUse-Comp/Laws';
import Search from './Component/User/AdvocateSearch';
import ProfileManagement from './Component/User/Profile';
import ChatBot from './Component/User/Law-GPT';
import AdvocateDetail from './Component/User/AdvocateDetail';
import AdminPage from './Component/Admin/AdminLanding';
import EditUser from './Component/Admin/EditUser';
// import AmendLaw from './Component/Admin/AmendLaw';
import SignupAdmin from './Component/Auth/CreateAccountAdmin';
import EditAccountAdmin from './Component/Admin/EditAccountAdmin';
import { useUserStatus, useLoginStatus } from './Component/Auth/UserStatus';


function App() {

  const isLoggedIn = useLoginStatus();
  const userType = useUserStatus();

  return (

    <div className='app-body'>
      <Router>
        <header>
          <NavBar />
        </header>
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route exact path="/" element={<LandingPage />} />
              {/* <Route exact path="/Legal-Ease" element={<LandingPage />} /> */}
            </>
          ) : (
            <>
              {userType === 'admin' ? (
                <>
                  <Route exact path="/" element={<AdminPage />} />
                  <Route exact path="/AdminLanding" element={<AdminPage />} />
                </>
              ) : (
                <>
                  <Route exact path="/" element={<HomePage />} />
                  <Route exact path="/HomePage" element={<HomePage />} />
                </>
              )}
            </>
          )}
          {/* <Route exact path="/HomePage" element={<HomePage />} /> */}

          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/LoginAdvocate" element={<LoginAdovcate />} />
          <Route exact path="/LoginAdmin" element={<LoginAdmin />} />
          <Route exact path="/Signup" element={<Register />} />
          <Route exact path="/Law-GPT" element={<ChatBot />} />
          <Route exact path="/Chats" element={<Chat />} />
          <Route exact path="/Laws" element={<Law />} />
          <Route exact path="/AdvocateSearch" element={<Search />} />
          <Route exact path="/SignupAdvocate" element={<RegisterAdvocate />} />
          <Route exact path="/SignupAdmin" element={<SignupAdmin />} />
          <Route exact path="/Profile" element={<ProfileManagement />} />
          <Route exact path="/AdvocateDetail" element={<AdvocateDetail />} />
          <Route exact path="/AdminLanding" element={<AdminPage />} />
          <Route exact path="/AmendUser" element={<EditUser />} />
          <Route exact path="/EditAccountAdmin" element={<EditAccountAdmin />} />
          {/* <Route exact path="/AmendLaw" element={<AmendLaw />} /> */}

        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
