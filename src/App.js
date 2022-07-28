import "./App.css";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Navbar from "./Component/NavbarComponent/Navbar";
import Home from "./Component/HomeCmp/Home";
import About from "./Component/AboutCmp/About";
import Contact from "./Component/ContactCmp/Contact";
import Service from "./Component/ServiceCmp/Service";
import Register from "./Component/RegisterCmp/Register";
import Login from "./Component/LoginCmp/Login";
import Header from "./Component/HeaderCmp/Header";
import UserData from "./Component/UserCmp/UserData";
import Error from "./Error";
import UpdateUser from "./Component/EditCmp/UpdateUser";
import { createContext, useContext } from "react";
import NoteState from "./Context/NoteState";
 

function App() {
    

  return (
    <div className="App">
      <BrowserRouter>
          <NoteState>
          <Header  />
         <Navbar />
        <Routes>  
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/updateUser/:id" element={<UpdateUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userData" element={<UserData />} />
          {/* <Route path="/userData" element={<PrivateRoute Component={UserData} />} /> */}
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
        </Routes>
        </NoteState>
      </BrowserRouter>
    </div>
  );
}

export default App;
