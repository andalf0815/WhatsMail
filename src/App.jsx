import { useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  },[])

  return <h1>Main Page</h1>;
}

export default App;
