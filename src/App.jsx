import React from 'react';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import CampusLife from './components/CampusLife';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Admissions2024 from './Pages/Admissions2024';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen">
      <TopHeader />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <CampusLife />
      <Admissions />
      <Testimonials />
      <Contact />
      <Footer />
      {/* <Router>
        <Routes>
            <Route path='/admissions2024' element={<Admissions2024 />} />
        </Routes>
      </Router> */}

{/* 
      <Router>
        <Routes>
          <Route path='/topheader' element={<TopHeader />}></Route>
          <Route path='/Navbar' element={<Navbar />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Programs' element={<Programs />}></Route>
          <Route path='/campuslife' element={<CampusLife />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;