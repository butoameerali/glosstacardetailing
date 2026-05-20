import { useState, useEffect } from 'react';

function About() {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const totalPhotos = 12;
    const totalVideos = 3;

    const generateShuffled = (count) => {
      let arr = Array.from({ length: count }, (_, i) => i + 1);
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    setPhotos(generateShuffled(totalPhotos));
    setVideos(generateShuffled(totalVideos));
  }, []);

  return (
    <main>
      {/* Page Header Banner */}
      <section className="bg-dark text-white text-center py-5 shadow-sm">
        <div className="container py-4">
          <h1 className="display-4 fw-bolder mb-2">About Glossta Detailing</h1>
          <p className="lead text-secondary m-0">Driven by Passion, Defined by Perfection.</p>
        </div>
      </section>

      {/* Main Corporate Story Area */}
      <section className="py-5 bg-white text-start">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <h2 className="fw-bolder text-dark mb-3">THE GLOSSTA STANDARD</h2>
              <div className="bg-dark mb-4" style={{ width: '60px', height: '4px' }}></div>
              <p className="text-secondary" style={{ lineHeight: '1.8' }}>
                Welcome to Glossta Car Detailing, where automotive care meets artistry. We understand that your vehicle is more than just transportation; it is an investment and a reflection of your personality.
              </p>
              <p className="text-secondary" style={{ lineHeight: '1.8' }}>
                Our team consists of highly trained and certified detailing professionals who are obsessed with the pursuit of the perfect finish. From reviving faded paint through meticulous correction to protecting it with advanced ceramic coatings, we use only the highest-grade products and cutting-edge techniques.
              </p>
              
              <div className="d-flex align-items-start gap-3 bg-light p-4 rounded border-start border-dark border-4 mt-4 shadow-sm">
                <i className="fa-solid fa-bullseye text-dark fs-2 mt-1"></i>
                <div>
                  <h4 className="fw-bold text-dark m-0 mb-2">Our Mission</h4>
                  <p className="text-secondary small m-0" style={{ lineHeight: '1.6' }}>
                    To provide unparalleled detailing services that deliver a flawless, lasting showroom shine, ensuring every client drives away with absolute pride.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img src="/exterior5p.png" alt="Glossta Detailing Team at Work" className="w-100 h-auto rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid Layout */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            <h2 className="fw-bolder text-dark">OUR WORK IN PHOTOS</h2>
            <div className="bg-dark mx-auto my-3" style={{ width: '60px', height: '4px' }}></div>
            <p className="text-muted small">Explore our recent transformations. (Images are randomized on every load!)</p>
          </div>

          <div className="row g-3">
            {photos.map((num) => (
              <div key={`photo-${num}`} className="col-6 col-md-4 col-lg-3">
                <div className="position-relative overflow-hidden rounded shadow-sm group bg-black" style={{ aspectRatio: '4/3' }}>
                  <img 
                    src={`/photo${num}.png`} 
                    alt={`Glossta Detailing Work ${num}`} 
                    className="w-100 h-100 object-fit-cover img-fluid img-hover-zoom transition" 
                    style={{ transition: 'transform 0.4s ease' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Grid Layout */}
      <section className="py-5 bg-secondary-subtle">
        <div className="container py-4">
          <div className="text-center mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            <h2 className="fw-bolder text-dark">DETAILING IN MOTION</h2>
            <div className="bg-dark mx-auto my-3" style={{ width: '60px', height: '4px' }}></div>
            <p className="text-muted small">Watch our meticulous detailing process and the stunning results.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {videos.map((num) => (
              <div key={`video-${num}`} className="col-12 col-md-6 col-lg-4">
                <div className="ratio ratio-16x9 shadow rounded overflow-hidden bg-black">
                  <video src={`/video${num}.mp4`} controls preload="metadata" className="w-100 h-100"></video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;