
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Write from "./pages/write/write";
import Setting from "./pages/settings/setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'
import "./App.css";

function App() {
  const user=false;
  return (
    
    
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>}>
          
        </Route>
        <Route path="/Register" element={user ? <Home/>:<Register/>}></Route>
        <Route path="/Login" element={user?<Home/>:<Login/>}></Route>
      
      
      <Route path="/Write" element={user?<Write/>:<Register/>}></Route>
      <Route path="/Setting" element={user?<Setting/>:<Register/>}></Route>
      <Route path="/Login" element={user?<Home/>:<Login/>}></Route>
      <Route path="/post/:postId" element={<Single/>}></Route>
      
      
      
      
      </Routes>
      </Router>
      
    
  );
}

export default App;
