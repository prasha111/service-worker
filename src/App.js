import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Home.js';
import User from "./components/User.js"
import Settings from './components/Settings.js';

function App() {
  return (
    <div className="App">
     
        <BrowserRouter>
        <Routes>
        <Route path="/user" Component={User}>
        </Route>
        <Route path="/" Component={Home}>
        </Route>
        <Route path="/settings" Component={Settings}>
        </Route>
        </Routes>
         
        
          </BrowserRouter>
    
    </div>
  );
}

export default App;
