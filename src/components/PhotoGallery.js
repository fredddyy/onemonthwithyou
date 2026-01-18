import React, { useState } from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Using actual photos from public folder
  const photos = [
    { id: 1, src: process.env.PUBLIC_URL + "/2.jpg", title: "", description: "The beginning of forever" },
    { id: 2, src: process.env.PUBLIC_URL + "/3.jpg", title: "", description: "Every moment with you is perfect" },
    { id: 3, src: process.env.PUBLIC_URL + "/4.jpg", title: "", description: "Your smile lights up my world" },
    { id: 4, src: process.env.PUBLIC_URL + "/5.jpg", title: "", description: "Making memories that last a lifetime" },
    { id: 5, src: process.env.PUBLIC_URL + "/6.jpg", title: "", description: "You are my favorite work of art" },
    { id: 6, src: process.env.PUBLIC_URL + "/7.jpg", title: "", description: "Every day is a new adventure with you" }
  ];

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="photo-gallery">
      <div className="container">
        <h2 className="section-title">My Favourite Pictures of you</h2>
        {/* <p className="gallery-intro">Every picture tells a story of our love. Here are some of my favorite moments with you.</p> */}
        
        <div className="gallery-grid">
          {photos.map((photo) => (
            <div key={photo.id} className="gallery-item" onClick={() => openModal(photo)}>
              <div className="photo-container">
                <img src={photo.src} alt={photo.title} className="gallery-photo" />
                <div className="photo-overlay">
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="upload-section">
          <h3>Add Your Special Photos</h3>
          <p>Upload your favorite memories together to make this gallery complete!</p>
          <div className="upload-area">
            <input type="file" id="photo-upload" multiple accept="image/*" style={{display: 'none'}} />
            <label htmlFor="photo-upload" className="upload-btn">
              <i className="fas fa-camera"></i>
              Choose Photos
            </label>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="photo-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <div className="modal-photo">
              <img src={selectedImage.src} alt={selectedImage.title} className="modal-photo-img" />
            </div>
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <div className="modal-hearts">
                <span>❤️ I love this moment with you! ❤️</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;