import Navbar from './components/navbar/Navbar';
import './App.css';

import AboutPage from './pages/about/AboutPage';
import Home from './pages/home/Home';
import ProjectP from './pages/projectPage/ProjectP';
import ProjectA from './pages/projectA/ProjectA';
import ProjectB from './pages/projectB/ProjectB';


import StackPage from './pages/stack/StackPage'
import ContactPage from './pages/contact/ContactPage';
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='body0body'> 
        <Navbar />

        <div className='contentOFconter'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectP />} />
            <Route path="/ProjectA" element={<ProjectA />} />
            <Route path="/ProjectB" element={<ProjectB />} />
            <Route path="/stack" element={<StackPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
