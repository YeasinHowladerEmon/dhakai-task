
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import MainSidebar from "./Components/MainSidebar/MainSidebar";
import Login from "./Components/pages/Auth/Login";
import PrivateRoute from "./Components/pages/Auth/PrivateRoute";
import Dashboard from "./Components/pages/Dashboard/Dashboard";
import Navber from "./Components/Share/Navber/Navber";



function App() {
  
 

  return (
    <>
      <BrowserRouter>
        <Navber />

        <div className="main">
          <MainSidebar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
