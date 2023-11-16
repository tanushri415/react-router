import About from './components/About';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Details from './components/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element={<Homepage />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
