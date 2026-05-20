import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Contact() {
  const location = useLocation();
  const [minDate, setMinDate] = useState('');
  const [btnText, setBtnText] = useState('CONFIRM BOOKING');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form State parameters tracking Matrix
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    car_size: '',
    service_package: '',
    car_model: '',
    location: '',
    preferred_date: '',
    message: ''
  });

  useEffect(() => {
    // Prevent old date selection matrix
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);

    // Dynamic Parameter URL parsing framework for parsing parameters from Services page
    const params = new URLSearchParams(location.search);
    const sizeParam = params.get('size') || '';
    const pkgParam = params.get('pkg') || '';

    setFormData((prev) => ({
      ...prev,
      car_size: sizeParam,
      service_package: pkgParam
    }));
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setBtnText('SENDING...');
    setIsSubmitting(true);

    const dataToSend = new FormData();
    dataToSend.append('access_key', 'fa342e93-e68e-4266-ae1f-1d2468a090fb');
    dataToSend.append('subject', 'New Booking Request from Glossta Website');
    Object.keys(formData).forEach(key => dataToSend.append(key, formData[key]));

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: dataToSend
      });

      if (response.status === 200) {
        setShowSuccess(true);
        setFormData({
          name: '', whatsapp: '', car_size: '', service_package: '',
          car_model: '', location: '', preferred_date: '', message: ''
        });
      } else {
        alert('Something went wrong! Please try again or message us on WhatsApp.');
      }
    } catch (err) {
      alert('Connection error! Please text us on WhatsApp directly.');
    } finally {
      setBtnText('CONFIRM BOOKING');
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-light position-relative">
      {/* Banner Matrix Layout */}
      <section className="bg-dark text-white text-center py-5 shadow-sm">
        <div className="container py-4">
          <h1 className="display-4 fw-bolder mb-2">Book Your Wash</h1>
          <p className="lead text-secondary m-0">Schedule your detailing service today and let us bring the shine to your doorstep.</p>
        </div>
      </section>

      {/* Form Content Framework mapping layout splits */}
      <section className="py-5">
        <div className="container py-4">
          <div className="row g-5 text-start">
            
            {/* Left Block Details Information Matrix */}
            <div className="col-12 col-lg-5">
              <h2 className="fw-bolder text-dark mb-3">Get In Touch</h2>
              <div className="bg-dark mb-4" style={{ width: '60px', height: '4px' }}></div>
              <p className="text-secondary mb-4" style={{ lineHeight: '1.7' }}>
                Have questions or ready to book? Fill out the form or reach out to us directly. We provide mobile detailing services right at your location.
              </p>

              <ul className="list-unstyled d-flex flex-column gap-4 mb-5">
                <li className="d-flex align-items-center gap-3">
                  <div className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center text-dark" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                    <i className="fa-solid fa-phone fs-5"></i>
                  </div>
                  <div>
                    <h4 className="fw-bold h6 m-0 text-muted">Call Us</h4>
                    <a href="tel:16727123185" className="text-dark fw-bold text-decoration-none">+1 (672) 712-3185</a>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <div className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center text-dark" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                    <i className="fa-solid fa-envelope fs-5"></i>
                  </div>
                  <div>
                    <h4 className="fw-bold h6 m-0 text-muted">Email Us</h4>
                    <a href="mailto:butoameerali@gmail.com" className="text-dark fw-bold text-decoration-none">butoameerali@gmail.com</a>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <div className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center text-dark" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                    <i className="fa-solid fa-location-dot fs-5"></i>
                  </div>
                  <div>
                    <h4 className="fw-bold h6 m-0 text-muted">Service Area</h4>
                    <p className="text-dark fw-bold m-0 small">We come to your location! Serving Auto City & surrounding areas.</p>
                  </div>
                </li>
              </ul>

              <div className="bg-secondary-subtle p-4 rounded text-center border">
                <p className="fw-bold text-dark mb-3">Prefer instant booking?</p>
                <a href="https://wa.me/16727123185?text=Hi%20Glossta%20Detailing!%20I%20would%20like%20to%20book%20a%20car%20wash." target="_blank" rel="noreferrer" className="btn btn-success w-100 fw-bold py-2">
                  <i className="fa-brands fa-whatsapp me-2"></i> Book via WhatsApp
                </a>
              </div>
            </div>

            {/* Right Block Scheduler Form Component */}
            <div className="col-12 col-lg-7">
              <div className="bg-white p-4 p-md-5 rounded shadow-sm border">
                <h3 className="h4 fw-bolder text-dark mb-4 border-bottom pb-2">Schedule Appointment</h3>
                
                <form onSubmit={handleFormSubmit} className="row g-3">
                  <div className="col-12">
                    <label className="form-label small fw-bold text-dark">Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="John Doe" className="form-control py-2 bg-light" />
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-bold text-dark">WhatsApp Number (Optional)</label>
                    <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} placeholder="+1 (672) 712-3185" className="form-control py-2 bg-light" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-dark">Car Size *</label>
                    <select name="car_size" required value={formData.car_size} onChange={handleInputChange} className="form-select py-2 bg-light">
                      <option value="" disabled>Select Size</option>
                      <option value="5-Seater">5-Seater Car</option>
                      <option value="7-Seater">7-Seater SUV/Van</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-dark">Service Package *</label>
                    <select name="service_package" required value={formData.service_package} onChange={handleInputChange} className="form-select py-2 bg-light">
                      <option value="" disabled>Select Package</option>
                      <option value="Interior Only">Interior Only</option>
                      <option value="Interior + Exterior">Interior + Exterior</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-bold text-dark">Car Make/Model</label>
                    <input type="text" name="car_model" value={formData.car_model} onChange={handleInputChange} placeholder="e.g. Honda Civic" className="form-control py-2 bg-light" />
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-bold text-dark">Your Location / Address *</label>
                    <input type="text" name="location" required value={formData.location} onChange={handleInputChange} placeholder="Street address, City" className="form-control py-2 bg-light" />
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-bold text-dark">Preferred Wash Date *</label>
                    <input type="date" name="preferred_date" min={minDate} required value={formData.preferred_date} onChange={handleInputChange} className="form-control py-2 bg-light" />
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-bold text-dark">Any Special Instructions?</label>
                    <textarea name="message" rows="4" value={formData.message} onChange={handleInputChange} placeholder="e.g. Needs deep stain removal..." className="form-control bg-light"></textarea>
                  </div>

                  <div className="col-12 mt-4">
                    <button type="submit" disabled={isSubmitting} className="btn btn-dark w-100 fw-bold py-3 fs-6">
                      {btnText}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APP STYLE SUCCESS POPUP OVERLAY */}
      {showSuccess && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-content text-center p-4" style={{ maxWidth: '400px' }}>
            <div className="text-success mb-3"><i className="fa-solid fa-circle-check display-4"></i></div>
            <h2 className="h4 fw-bolder text-dark mb-2">Booking Received!</h2>
            <p className="text-secondary small mb-4">
              Thank you for choosing Glossta Car Detailing. Your request has been sent successfully. We will contact you shortly to confirm your appointment.
            </p>
            <button className="btn btn-dark w-100 fw-bold" onClick={() => setShowSuccess(false)}>Awesome!</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Contact;