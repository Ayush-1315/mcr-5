import './App.css';
import {Routes,Route} from "react-router-dom";
import { Home } from './pages/home/home';
import { Recipie } from './pages/recipiePage/recipiePage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipie/:recipieId" element={<Recipie/>}/>
      </Routes>
    </div>
  );
}

export default App;
