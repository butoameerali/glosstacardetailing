import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Services() {
  // --- Calculator Local State ---
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

  // Dynamically configure booking URL parameters
  const sizeText = carSize === '5' ? '5-Seater' : '7-Seater';
  const pkgText = servicePackage === 'interior' ? 'Interior Only' : 'Interior + Exterior';
  const bookingUrl = `/contact?size=${sizeText}&pkg=${encodeURIComponent(pkgText)}`;

  return (
    <main>
      
      <Helmet>
   <title>Our Services | Glossta Car Detailing</title>
   <meta name="description" content="View our premium interior and exterior car detailing packages for 5-seater and 7-seater vehicles." />
</Helmet>

      {/* Page Top Banner */}
      <section className="bg-dark text-white text-center py-5 shadow-sm">
        <div className="container py-4">
          <h1 className="display-4 fw-bolder mb-2" style={{ letterSpacing: '1px' }}>Our Premium Packages</h1>
          <p className="lead text-secondary m-0">Simple, transparent, and flawless detailing services tailored to your vehicle's size.</p>
        </div>
      </section>

      {/* Services Detail Rows */}
      <section className="py-5 bg-white">
        <div className="container py-4 d-flex flex-column gap-5">
          
          {/* Row 1: 5-Seater Interior Only */}
          <div className="row align-items-center g-5">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center justify-content-center bg-light text-dark rounded-circle mb-3 shadow-sm" style={{ width: '60px', height: '60px' }}>
                <i className="fa-solid fa-couch fs-4"></i>
              </div>
              <h2 className="fw-bolder h3">5-Seater: Interior Only</h2>
              <p className="text-muted fw-bold fs-5 my-2">Package Price: <span className="text-dark fw-extrabold">$130</span></p>
              <p className="text-secondary my-3" style={{ lineHeight: '1.7' }}>A complete reset for your 5-seater cabin. We extract dirt, remove stains, and condition all surfaces to make your interior feel and smell brand new.</p>
              <ul className="list-unstyled d-flex flex-column gap-2 my-4">
                <li><i className="fa-solid fa-check text-success me-2"></i> Deep vacuuming of seats, carpets, and mats</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Steam cleaning for vents and dashboard</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Leather conditioning and fabric stain removal</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Interior glass cleaning for a streak-free view</li>
              </ul>
              <Link to="/contact?size=5-Seater&pkg=Interior+Only" className="btn btn-dark fw-bold px-4 py-2">Select Package</Link>
            </div>
            <div className="col-12 col-md-6">
              <img src="/interior5s.jpg" alt="5-Seater Interior Auto Detailing" className="w-100 rounded shadow-sm object-fit-cover" style={{ height: '380px' }} />
            </div>
          </div>

          <hr className="text-muted my-3" />

          {/* Row 2: 5-Seater Interior + Exterior (Flipped Layout via Bootstrap) */}
          <div className="row align-items-center g-5 flex-md-row-reverse">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center justify-content-center bg-light text-dark rounded-circle mb-3 shadow-sm" style={{ width: '60px', height: '60px' }}>
                <i className="fa-solid fa-car-sparkles fs-4"></i>
              </div>
              <h2 className="fw-bolder h3">5-Seater: Interior + Exterior</h2>
              <p className="text-muted fw-bold fs-5 my-2">Package Price: <span className="text-dark fw-extrabold">$140</span></p>
              <p className="text-secondary my-3" style={{ lineHeight: '1.7' }}>The ultimate transformation for your standard 5-seater. Get everything included in our Interior package, plus a comprehensive exterior wash and shine to restore your car's showroom look.</p>
              <ul className="list-unstyled d-flex flex-column gap-2 my-4">
                <li><i className="fa-solid fa-check text-success me-2"></i> Everything in the Interior Only package</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Safe foam hand wash & bug removal</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Wheel, tire, and wheel well deep cleaning</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Premium tire shine and exterior wax coating</li>
              </ul>
              <Link to="/contact?size=5-Seater&pkg=Interior+%2B+Exterior" className="btn btn-dark fw-bold px-4 py-2">Select Package</Link>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex gap-3">
                <img src="/interior5p.png" alt="5-Seater Interior Detailing" className="w-50 rounded shadow-sm object-fit-cover" style={{ height: '350px' }} />
                <img src="/exterior5p.png" alt="5-Seater Exterior Detailing" className="w-50 rounded shadow-sm object-fit-cover" style={{ height: '350px' }} />
              </div>
            </div>
          </div>

          <hr className="text-muted my-3" />

          {/* Row 3: 7-Seater Interior Only */}
          <div className="row align-items-center g-5">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center justify-content-center bg-light text-dark rounded-circle mb-3 shadow-sm" style={{ width: '60px', height: '60px' }}>
                <i className="fa-solid fa-van-shuttle fs-4"></i>
              </div>
              <h2 className="fw-bolder h3">7-Seater: Interior Only</h2>
              <p className="text-muted fw-bold fs-5 my-2">Package Price: <span className="text-dark fw-extrabold">$150</span></p>
              <p className="text-secondary my-3" style={{ lineHeight: '1.7' }}>Designed for larger vehicles. We deep clean every row, corner, and crevice of your 7-seater SUV or Minivan to ensure a hygienic and fresh environment for your whole family.</p>
              <ul className="list-unstyled d-flex flex-column gap-2 my-4">
                <li><i className="fa-solid fa-check text-success me-2"></i> Complete 3-row vacuuming and debris removal</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Stain extraction for all seats and floor mats</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Sanitization of high-touch areas (steering, handles)</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Odor neutralization treatment</li>
              </ul>
              <Link to="/contact?size=7-Seater&pkg=Interior+Only" className="btn btn-dark fw-bold px-4 py-2">Select Package</Link>
            </div>
            <div className="col-12 col-md-6">
              <img src="/interior7s.jpg" alt="7-Seater Interior Detailing" className="w-100 rounded shadow-sm object-fit-cover" style={{ height: '380px' }} />
            </div>
          </div>

          <hr className="text-muted my-3" />

          {/* Row 4: 7-Seater Interior + Exterior (Flipped Layout) */}
          <div className="row align-items-center g-5 flex-md-row-reverse">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center justify-content-center bg-light text-dark rounded-circle mb-3 shadow-sm" style={{ width: '60px', height: '60px' }}>
                <i className="fa-solid fa-truck-pickup fs-4"></i>
              </div>
              <h2 className="fw-bolder h3">7-Seater: Interior + Exterior</h2>
              <p className="text-muted fw-bold fs-5 my-2">Package Price: <span className="text-dark fw-extrabold">$170</span></p>
              <p className="text-secondary my-3" style={{ lineHeight: '1.7' }}>Complete inside-out care for your large vehicle. We combine our rigorous 3-row interior cleaning with a flawless exterior hand wash to make your SUV look massive and pristine.</p>
              <ul className="list-unstyled d-flex flex-column gap-2 my-4">
                <li><i className="fa-solid fa-check text-success me-2"></i> Comprehensive 7-Seater Interior Deep Clean</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Scratch-free exterior foam wash & dry</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Deep clean of large rims and oversized tires</li>
                <li><i className="fa-solid fa-check text-success me-2"></i> Protective sealant application for lasting gloss</li>
              </ul>
              <Link to="/contact?size=7-Seater&pkg=Interior+%2B+Exterior" className="btn btn-dark fw-bold px-4 py-2">Select Package</Link>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex gap-3">
                <img src="/interior7p.png" alt="7-Seater Interior Detailing" className="w-50 rounded shadow-sm object-fit-cover" style={{ height: '350px' }} />
                <img src="/exterior7p.png" alt="7-Seater Exterior Detailing" className="w-50 rounded shadow-sm object-fit-cover" style={{ height: '350px' }} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-5 bg-secondary-subtle" id="quote-section">
        <div className="container py-5">
          <div className="text-center mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            <h2 className="fw-bolder">ESTIMATE YOUR COST</h2>
            <div className="bg-dark mx-auto my-3" style={{ width: '60px', height: '4px' }}></div>
            <p className="text-muted">Select your vehicle size and the services you need to get an instant estimated price.</p>
          </div>

          <div className="row g-4 bg-white p-4 p-md-5 rounded shadow-sm text-start">
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
                    7-Seater SUV/Van
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
                <Link to={bookingUrl} className="btn btn-dark w-100 fw-bold py-3">BOOK APPOINTMENT NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;