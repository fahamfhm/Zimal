
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/navbar';
import Cosmetics from './pages/Cosmetics';
import Foods from './pages/Food';
import Spices from './pages/Spices';
import About from './pages/About';


function App() {

  return (
    <>
      <Navbar> </Navbar>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/cosmetics' element={<Cosmetics />} />
          <Route path='/foods' element={<Foods />} />
          <Route path='/spices' element={<Spices/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
      <Footer></Footer>
    </>



  )
}

export default App
