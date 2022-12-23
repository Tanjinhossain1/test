import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Dashboard from './Components/Dashboard';  
import Navbar from './Components/Navbar'; 


function App() { 
  
  return (
    <div>
      <Navbar />
     <Routes> 
      <Route path='/' element={<Dashboard />}> 
      </Route>
     </Routes>
    </div>
  );
}
 


export default App;
