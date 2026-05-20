import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // --- Price Calculator State ---
  const [carSize, setCarSize] = useState('5');
  const [servicePackage, setServicePackage] = useState('interior');
  const [price, setPrice] = useState(130);

  useEffect(() => {
    let finalPrice = 0;
    if (carSize === '5') {
      finalPrice = servicePackage === 'interior' ? 130 : 140;
    } else if (carSize === '7') {
      finalPrice = servicePackage === 'interior' ? 150 : 170;
    }
    setPrice(finalPrice);
  }, [carSize, servicePackage]);

  // --- Hero Animation State/Refs ---
  const brushRef = useRef(null);
  const dirtyCarRef = useRef(null);

  useEffect(() => {
    let timeoutIds = [];

    const runWashCycle = () => {
      const brushWrap = brushRef.current;
      const dirtyCar = dirtyCarRef.current;
      if (!brushWrap || !dirtyCar) return;

      dirtyCar.style.transition = "none";
      dirtyCar.style.opacity = "1";
      dirtyCar.style.filter = "blur(0px)";

      brushWrap.style.transition = "none";
      brushWrap.style.transform = "translate(120vw, 50vh) scale(1)";
      brushWrap.style.opacity = "0";
      brushWrap.classList.remove("is-scrubbing");

      timeoutIds.push(setTimeout(() => {
        brushWrap.style.transition = "transform 0.8s ease-out, opacity 0.5s ease";
        brushWrap.style.opacity = "1";
        brushWrap.style.transform = "translate(40vw, 50vh) scale(1)";
        brushWrap.classList.add("is-scrubbing");
      }, 500));

      timeoutIds.push(setTimeout(() => {
        brushWrap.style.transition = "transform 1.2s ease-in-out";
        brushWrap.style.transform = "translate(55vw, 30vh) scale(1)";
      }, 1600));

      timeoutIds.push(setTimeout(() => {
        brushWrap.style.transform = "translate(75vw, 45vh) scale(1)";
      }, 2800));

      timeoutIds.push(setTimeout(() => {
        brushWrap.classList.remove("is-scrubbing");
        brushWrap.style.transition = "transform 1s cubic-bezier(0.5, 0, 1, 0.5), opacity 0.8s ease";
        brushWrap.style.transform = `translate(20vw, -10vh) scale(0.1) rotate(180deg)`;
        brushWrap.style.opacity = "0";
      }, 4200));

      timeoutIds.push(setTimeout(() => {
        dirtyCar.style.transition = "filter 1.5s ease-in-out, opacity 1.5s ease-in-out";
        dirtyCar.style.filter = "blur(12px)";
        dirtyCar.style.opacity = "0";
      }, 5200));

      timeoutIds.push(setTimeout(runWashCycle, 9500));
    };

    timeoutIds.push(setTimeout(runWashCycle, 500));
    return () => timeoutIds.forEach(clearTimeout); // Cleanup on unmount
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section position-relative d-flex align-items-center" style={{ minHeight: 'calc(100vh - 120px)', overflow: 'hidden' }}>
        <div className="hero-bg-wrapper position-absolute w-100 h-100 start-0 top-0 z-0 pointer-events-none">
          <img src="/cleanCar.png" alt="Clean Car" className="car-bg clean-car position-absolute w-100 h-100 object-fit-cover" style={{ zIndex: 1 }} />
          <img src="/dirtyCar.png" alt="Dirty Car" ref={dirtyCarRef} className="car-bg dirty-car position-absolute w-100 h-100 object-fit-cover" style={{ zIndex: 2 }} />
          <div className="brush-wrapper position-absolute" ref={brushRef} style={{ width: '150px', zIndex: 5, opacity: 0 }}>
            <img src="/brush.png" alt="Detailing Brush" className="w-100 h-auto" />
          </div>
        </div>

        <div className="container position-relative z-3">
          <div className="hero-content" style={{ maxWidth: '600px' }}>
            <h2 className="display-4 fw-bolder mb-4 text-dark shadow-sm-text">ELEVATE YOUR RIDE'S<br />BRILLIANCE WITH<br />GLOSSTA CAR DETAILING</h2>
            <div className="d-flex flex-column flex-md-row gap-3">
              <a href="#quote-section" className="btn btn-dark btn-lg fw-bold px-4">GET FREE QUOTE <i className="fa-solid fa-arrow-down ms-2"></i></a>
              <a href="https://wa.me/16727123185" target="_blank" rel="noreferrer" className="btn btn-secondary btn-lg fw-bold px-4"><i className="fa-brands fa-whatsapp ms-2"></i> CALL / CHAT NOW</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            <h2 className="fw-bolder">OUR PREMIUM SERVICES</h2>
            <div className="heading-line bg-dark mx-auto my-3" style={{ width: '60px', height: '4px' }}></div>
            <p className="text-muted">Experience the ultimate care for your vehicle with our professional detailing packages.</p>
          </div>

          <div className="row g-4">
            {/* Service Cards using Bootstrap Grid */}
            {[
              { icon: 'fa-shower', title: 'Exterior Detailing', desc: 'Complete hand wash, bug removal, wheel cleaning, tire shine, and premium wax coating for a mirror-like finish.' },
              { icon: 'fa-couch', title: 'Interior Deep Clean', desc: 'Vacuuming, steam cleaning, leather conditioning, stain extraction, and odor removal for a fresh cabin.' },
              { icon: 'fa-spray-can-sparkles', title: 'Paint Correction', desc: 'Machine polishing and buffing to remove swirl marks, light scratches, and oxidation, restoring factory shine.' },
              { icon: 'fa-shield-halved', title: 'Ceramic Coating', desc: 'Long-lasting nano-ceramic protection against scratches, UV rays, and dirt. Keeps your car permanently glossy.' }
            ].map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <div className="card h-100 text-center p-4 border-0 shadow-sm service-card transition-hover">
                  <div className="icon-box mx-auto mb-3 bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <i className={`fa-solid ${service.icon} fs-2 text-dark`}></i>
                  </div>
                  <h3 className="h5 fw-bold">{service.title}</h3>
                  <p className="text-muted small">{service.desc}</p>
                  <Link to="/services" className="text-dark fw-bold text-decoration-none mt-auto">Learn More <i className="fa-solid fa-arrow-right ms-1"></i></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-5 bg-secondary-subtle" id="quote-section">
        <div className="container py-5">
          <div className="text-center mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            <h2 className="fw-bolder">ESTIMATE YOUR COST</h2>
            <div className="heading-line bg-dark mx-auto my-3" style={{ width: '60px', height: '4px' }}></div>
            <p className="text-muted">Select your vehicle size and the services you need to get an instant estimated price.</p>
          </div>

          <div className="row g-4 bg-white p-4 p-md-5 rounded shadow-sm">
            <div className="col-lg-8">
              <div className="mb-4">
                <h3 className="h6 fw-bold border-bottom pb-2 mb-3">1. Select Vehicle Size</h3>
                <div className="d-flex flex-column gap-2">
                  <label className="d-flex align-items-center gap-2 fw-semibold text-secondary cursor-pointer">
                    <input type="radio" name="carSize" value="5" checked={carSize === '5'} onChange={(e) => setCarSize(e.target.value)} className="form-check-input mt-0" />
                    5-Seater Car
                  </label>
                  <label className="d-flex align-items-center gap-2 fw-semibold text-secondary cursor-pointer">
                    <input type="radio" name="carSize" value="7" checked={carSize === '7'} onChange={(e) => setCarSize(e.target.value)} className="form-check-input mt-0" />
                    7-Seater Car
                  </label>
                </div>
              </div>

              <div>
                <h3 className="h6 fw-bold border-bottom pb-2 mb-3">2. Select Service Package</h3>
                <div className="d-flex flex-column gap-2">
                  <label className="d-flex align-items-center gap-2 fw-semibold text-secondary cursor-pointer">
                    <input type="radio" name="servicePackage" value="interior" checked={servicePackage === 'interior'} onChange={(e) => setServicePackage(e.target.value)} className="form-check-input mt-0" />
                    Interior Only
                  </label>
                  <label className="d-flex align-items-center gap-2 fw-semibold text-secondary cursor-pointer">
                    <input type="radio" name="servicePackage" value="both" checked={servicePackage === 'both'} onChange={(e) => setServicePackage(e.target.value)} className="form-check-input mt-0" />
                    Interior + Exterior
                  </label>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-light p-4 rounded text-center h-100 d-flex flex-column justify-content-center border">
                <h3 className="h5 fw-bold text-dark mb-3">Estimated Total</h3>
                <div className="display-3 fw-bolder text-dark mb-3 d-flex justify-content-center align-items-start">
                  <span className="fs-4 mt-2 text-muted">$</span>
                  <span>{price}</span>
                </div>
                <p className="small text-muted mb-4">*Final price will be confirmed upon physical inspection of the vehicle.</p>
                <Link to="/contact" className="btn btn-dark w-100 fw-bold py-3">BOOK APPOINTMENT NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;