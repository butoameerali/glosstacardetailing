import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';       // <-- Yahan add kiya hai
import Privacy from './pages/Privacy';   // <-- Yahan add kiya hai

// --- SHARED MODAL SYSTEM ---
function AppModal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
          <h2 className="h4 fw-bolder m-0 text-dark">{title}</h2>
          <button className="btn-close" onClick={onClose} aria-label="Close"></button>
        </div>
        <div className="modal-body-scroll text-start text-dark">
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeModal, setActiveModal] = useState('none');
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        
        {/* Top Info Bar */}
        <div className="bg-theme-light text-end py-2 small border-bottom">
          <div className="container d-flex justify-content-end gap-2 align-items-center">
            <a href="https://wa.me/16727123185" target="_blank" rel="noreferrer" className="text-dark text-decoration-none fw-bold">
              <i className="fa-brands fa-whatsapp text-success me-1"></i> Call / Chat <strong>+1 (672) 712-3185</strong>
            </a>
            <span className="text-muted">| Open 9AM-6PM</span>
          </div>
        </div>

        {/* Responsive Header / Navbar */}
        <header className="bg-theme-light py-3 border-bottom sticky-top shadow-sm z-3">
          <div className="container d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <Link to="/" className="text-decoration-none" onClick={() => setIsNavOpen(false)}>
                <h1 className="m-0 fs-3 fw-bolder text-dark" style={{ letterSpacing: '2px' }}>GLOSSTA</h1>
                <p className="m-0 text-muted fw-bold" style={{ fontSize: '9px', letterSpacing: '1px' }}>CAR DETAILING SERVICE</p>
              </Link>
            </div>

            <button className="btn custom-btn-dark d-md-none border-0" onClick={() => setIsNavOpen(!isNavOpen)}>
              <i className={`fa-solid ${isNavOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>

            <nav className={`w-100 d-md-block col-10 col-md-auto mt-3 mt-md-0 ${isNavOpen ? 'd-block' : 'd-none'}`}>
              <ul className="d-flex flex-column flex-md-row list-unstyled m-0 gap-3 gap-md-4 text-center">
                <li><Link to="/" onClick={() => setIsNavOpen(false)} className="text-dark text-decoration-none fw-bold hover-underline">HOME</Link></li>
                <li><Link to="/services" onClick={() => setIsNavOpen(false)} className="text-dark text-decoration-none fw-bold hover-underline">SERVICES</Link></li>
                <li><Link to="/about" onClick={() => setIsNavOpen(false)} className="text-dark text-decoration-none fw-bold hover-underline">ABOUT US</Link></li>
                <li><Link to="/contact" onClick={() => setIsNavOpen(false)} className="text-dark text-decoration-none fw-bold hover-underline">CONTACT US</Link></li>
              </ul>
            </nav>
          </div>
{/* Is line ke baad... */}
        </header>

        {/* --- YAHAN SE FLOATING SOCIAL BAR ADD KAREIN --- */}
        <div className="social-footer">
          <a href="https://wa.me/16727123185" target="_blank" rel="noreferrer" className="social-item">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/glosstacardetailing" target="_blank" rel="noreferrer" className="social-item">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/glosstacardetailing?igsh=bjJlZHYzN2w0b3Vr" target="_blank" rel="noreferrer" className="social-item">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        {/* --- YAHAN TAK --- */}




        {/* Render Connected Routes */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Main Footer Matrix */}
        <footer className="bg-dark text-light pt-5 mt-auto">
          <div className="container pb-5">
            <div className="row gy-4">
              <div className="col-md-6 col-lg-4 text-start">
                <h2 className="fw-bolder text-white mb-1" style={{ letterSpacing: '2px' }}>GLOSSTA</h2>
                <p className="small text-secondary fw-bold mb-3" style={{ letterSpacing: '1px' }}>CAR DETAILING</p>
                <p className="small text-light-50" style={{ lineHeight: '1.8' }}>Providing premium auto detailing services. We bring the showroom shine back to your vehicle with unmatched precision, high-quality products, and absolute care.</p>
              </div>
              <div className="col-md-6 col-lg-4 text-md-center text-start">
                <h3 className="h5 text-white fw-bold mb-4 border-bottom border-secondary pb-2 d-inline-block">Quick Links</h3>
                <ul className="list-unstyled d-flex flex-column gap-2 align-items-md-center align-items-start">
                  <li><Link to="/" className="text-secondary text-decoration-none hover-white">Home</Link></li>
                  <li><Link to="/services" className="text-secondary text-decoration-none hover-white">Our Services</Link></li>
                  <li><Link to="/about" className="text-secondary text-decoration-none hover-white">About Us</Link></li>
                  <li><Link to="/contact" className="text-secondary text-decoration-none hover-white">Get a Quote</Link></li>
                </ul>
              </div>
              <div className="col-md-12 col-lg-4 text-start">
                <h3 className="h5 text-white fw-bold mb-4 border-bottom border-secondary pb-2 d-inline-block">Contact Us</h3>
                <ul className="list-unstyled small d-flex flex-column gap-3" style={{ lineHeight: '1.6' }}>
                  <li className="d-flex gap-3"><i className="fa-solid fa-location-dot mt-1 text-secondary"></i> 123 Detailing Studio St, Auto City</li>
                  <li className="d-flex gap-3"><i className="fa-solid fa-phone mt-1 text-secondary"></i> <a href="tel:16727123185" className="text-secondary text-decoration-none">+1 (672) 712-3185</a></li>
                  <li className="d-flex gap-3"><i className="fa-solid fa-envelope mt-1 text-secondary"></i> <a href="mailto:butoameerali@gmail.com" className="text-secondary text-decoration-none">butoameerali@gmail.com</a></li>
                  <li className="d-flex gap-3"><i className="fa-solid fa-clock mt-1 text-secondary"></i> Mon - Sat: 9:00 AM - 6:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-black py-3 border-top border-secondary">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary">
              <p className="mb-2 mb-md-0">&copy; 2026 Glossta Car Detailing. All Rights Reserved.</p>
              <div className="d-flex gap-3">
                <button onClick={() => setActiveModal('privacy')} className="btn btn-link p-0 text-secondary text-decoration-none hover-white small">Privacy Policy</button>
                <button onClick={() => setActiveModal('terms')} className="btn btn-link p-0 text-secondary text-decoration-none hover-white small">Terms of Service</button>
              </div>
            </div>
          </div>
        </footer>

        {/* Yahan par ab original files Modal ke andar render ho rahi hain */}
        <AppModal isOpen={activeModal === 'privacy'} onClose={() => setActiveModal('none')} title="Privacy Policy">
          <Privacy /> 
        </AppModal>
        
        <AppModal isOpen={activeModal === 'terms'} onClose={() => setActiveModal('none')} title="Terms and Conditions">
          <Terms />
        </AppModal>

      </div>
    </Router>
  );
}

export default App;