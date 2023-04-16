import './App.css';
import { Routes, Route } from "react-router-dom"
import Genre from './pages/Genre'
import Entertainment from './pages/Entertainment'
import Personal1 from './pages/Personal1'
import Personal2 from './pages/Personal2'
import Signup from './pages/signup'
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <Signup/> } />
        <Route path="entertainment" element={ <Entertainment/> } />
        <Route path="personal1" element={ <Personal1/> } />
        <Route path="personal2" element={ <Personal2/> } />
        <Route path="genre" element={ <Genre/> } />
      </Routes>

    </div>
  );
}

export default App;
