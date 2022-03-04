import './App.css';
import Home from './pages/Home/Home';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Authenticate from './pages/Auth/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';

function App() {
  return (   
    <>
    <Navigation />
      <Routes>

      <Route path="/" exact element={
      <GuestRoute>
      <Home />
      </GuestRoute>
      } />
      <Route path="/authenticate" element={
      <GuestRoute>
        <Authenticate />
      </GuestRoute>
      } />

      <Route path='/activate' element={
        <SemiPrivateRoute>
          <Activate />
        </SemiPrivateRoute>
      } />

      <Route path='/rooms' element={
        <PrivateRoute>
          <Rooms />
        </PrivateRoute>
      } />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  );
}

const auth = false;
const user = {
    activated: false
}

// guest route
const GuestRoute = ({children}) => {
  return auth ? <Navigate to="/rooms" /> : (children);
}

// semi private route
const SemiPrivateRoute = ({children}) =>{ 
  return !auth ? <Navigate to="/" /> : auth && !user.activated ? (children) : <Navigate to="/rooms" />;
}

// private route
const PrivateRoute = ({children}) =>{ 
  return !auth ? <Navigate to="/" /> : auth && !user.activated ? <Navigate to="/activate" /> : (children) ;
}

export default App;
