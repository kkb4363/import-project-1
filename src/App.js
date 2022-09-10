import {BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sebtember from "./pages/Sebtember";
import October from './pages/October';
import August from './pages/August';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Sebtember/>}/>
    <Route path='/October' element={<October/>}/>
    <Route path='/August' element={<August/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
