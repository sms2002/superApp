import './App.css';
import { Routes, Route } from "react-router-dom"
import Genre from './pages/Genre'
import Entertainment from './pages/Entertainment'
import Personal1 from './pages/Personal1'
import Signup from './pages/signup'
import Temp from './pages/temp'
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <Signup/> } />
        <Route path="entertainment" element={ <Entertainment/> } />
        <Route path="personal1" element={ <Personal1/> } />
        <Route path="genre" element={ <Genre/> } />
        <Route path="temp" element={ <Temp/> } />
      </Routes>

    </div>
  );
}

export default App;
