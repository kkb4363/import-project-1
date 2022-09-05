import {BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Next from './pages/Next';
import Prev from './pages/Prev';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/Next' element={<Next/>}/>
    <Route path='/Prev' element={<Prev/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
