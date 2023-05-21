import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Login from "./components/Login";
import Logo from "./components/logo";
import BookDetails  from "./components/Book/BookDetails";
import DeleteBook from "./components/Book/deletebook";
import Footer from "./components/Footer";
import BookReport from "./components/Book/BookReport";

function App() {
  return <React.Fragment>
   
   
  
    <Logo/>
    <Header/>
   
    <main>
        <Routes>
          <Route path="/Home" element={<Home/>} exact/>          
          <Route path="/books" element={<Books/>} exact/>
          <Route path="/Services" element={<Services/>} exact/>
          <Route path="/Contact" element={<Contact/>} exact/>
          <Route path="/Login" element={<Login/>} exact/> 
          <Route path="/AddBook" element={<AddBook/>} exact/> 
          <Route path="/books/:id" element={<BookDetails/>} exact/> 
          
          
          
     
        </Routes> 
    </main>
    <Footer/>
  </React.Fragment>  
  
}

export default App;
