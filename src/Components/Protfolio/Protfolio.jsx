import React, { useState } from 'react';
import style from './protfolio.module.css';
import image1 from '../../assets/poert1.png';
import image2 from '../../assets/port2.png';
import image3 from '../../assets/port3.png';

export default function Protfolio() {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => {
    setModalImage(image); };

  const closeModal = () => {
    setModalImage(null); 
  };

  const images = [image1, image2, image3, image1, image2, image3]; 

  return (
    <>
      <div className="p-5">
        <h1 className={`${style.text}`}>PROTFOLIO COMPONENT</h1>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className={`${style.line} me-3`}></div>
          <i className={`${style.text} fa-solid fa-star`}></i>
          <div className={`${style.line} ms-3`}></div>
        </div>

        <div className="container">
          <div className="row g-5">
            {images.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="rounded-3 overflow-hidden position-relative"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    className={`${style.border} w-100 rounded-3`}
                    alt="Portfolio Item"
                  />
                  <div
                    className={`${style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}
                  >
                    <i className="fa-solid fa-plus fa-4x text-white"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalImage && (
        <div
          className={`${style.modal} d-flex justify-content-center align-items-center`}
          onClick={closeModal}
        >
          <img
            src={modalImage}
            className={`${style.modalImage}`}
            alt="Full View"
          />
        </div>
      )}
    </>
  );
}
