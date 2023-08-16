import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Adduser from './components/Adduser';
import EditUsser from './components/EditUsser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Adduser/>}/>
        <Route path='/edit/:id' element={<EditUsser/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
