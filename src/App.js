import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import Team from './components/Team'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/team' element={<Team/>}/>
      </Routes>
    </div>
  );
}

export default App;
