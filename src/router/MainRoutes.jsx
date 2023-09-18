import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<h1>Login</h1>} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default MainRoutes;
