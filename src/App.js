import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import Home from "./Components/Dashboard/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Dashboard/Header";
import Profile from "./Components/Dashboard/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        {/* <Login/> */}
        <div className="py-5">
          <div className="container-fluid my-5 row">
            <div className="col-3">
              <Home />
            </div>
            <div className="col-9">
              <Routes>
                <Route path='/dash-board' element={<Dashboard />} />
                <Route path="/profile" element={<Profile/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
