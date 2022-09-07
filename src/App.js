import {BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Calender from "./pages/Calender";
import Next from './pages/Next';
import Prev from './pages/Prev';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Calender/>}/>
    <Route path='/Next' element={<Next/>}/>
    <Route path='/Prev' element={<Prev/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
