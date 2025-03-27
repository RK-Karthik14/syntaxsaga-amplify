import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthFile from "./components/Authentication/AuthFile";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden bg-white text-dark">

        <Routes>
          <Route path="/home" element={
            <>
            <Hero />
            <Services />
            <Banner />
            <Subscribe />
            <Banner2 />
            <Footer />
            </>
          }/>
          <Route path="/" element={<div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-indigo-200"><AuthFile/></div>}/>
        </Routes>

      </main>
    </Router>
  );
};

export default App;
