import {BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import December from "./pages/December";
import November from "./pages/November";
import Sebtember from "./pages/Sebtember";
import October from './pages/October';
import August from './pages/August';
import July from "./pages/July";
import June from "./pages/June";
import May from "./pages/May";
import April from "./pages/April";
import March from "./pages/March";
import February from "./pages/February";
import January from './pages/January';


function App() {
 
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/January' element={<January/>}/>
    <Route path='/February' element={<February/>}/>
    <Route path='/March' element={<March/>}/>
    <Route path='/April' element={<April/>}/>
    <Route path='/May' element={<May/>}/>
    <Route path='/June' element={<June/>}/>
    <Route path='/July' element={<July/>}/>
    <Route path='/August' element={<August/>}/>
    <Route path="/" element={<Sebtember/>}/>
    <Route path='/October' element={<October/>}/>
    <Route path='/November' element={<November/>}/>
    <Route path='/December' element={<December/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
