import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./middleware/ProtectedRoutes";
import Success from "./pages/Success"
import HomePage from "./pages/HomePage";
function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          {/* Protecred Routes*/}
          <Route path="/success" element={<Success/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/home" element={<HomePage/>}/>
          </Route>


          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
