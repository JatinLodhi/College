import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.webp';

function Gallery() {
  const [activeSection, setActiveSection] = useState('departments');

  const departmentPhotos = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image1 },
    { id: 5, image: image2 },
    { id: 6, image: image3 },
    { id: 7, image: image1 },
    { id: 8, image: image2 },
    { id: 9, image: image3 },
    { id: 10, image: image1 },
    { id: 11, image: image2 },
  ];

  const cellCommitteePhotos = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image1 },
    { id: 5, image: image2 },
    { id: 6, image: image2 },
    { id: 6, image: image2 },
    { id: 8, image: image2 },
    
  ];

  return (
    <div className="gallery-section py-5 bg-light mt-5">
      <Container>
        <h1 className="text-center mb-5 display-4 fw-bold">📸 College Gallery</h1>

        {/* Section Navigation */}
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <div className="btn-group" role="group">
              <button 
                className={`btn ${activeSection === 'departments' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                onClick={() => setActiveSection('departments')}
              >
                🏢 Departments
              </button>
              <button 
                className={`btn ${activeSection === 'cells' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveSection('cells')}
              >
                🏛️ Cells & Committees
              </button>
            </div>
          </Col>
        </Row>

        {/* Photo Grid */}
        <Row className="g-3">
          {(activeSection === 'departments' ? departmentPhotos : cellCommitteePhotos).map((photo) => (
            <Col key={photo.id} lg={3} md={4} sm={6} className="mb-3">
              <div className="gallery-item">
                <img 
                  src={photo.image} 
                  alt="Gallery"
                  className="img-fluid rounded shadow-sm"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
}

export default Gallery;