import React from 'react';
import { Container, Nav, Navbar, Row, Col, Card, Image } from 'react-bootstrap';
import '../Style/Library.css';
import  myPhoto from "../assets/Screenshot 2025-06-22 214533.png"; // Import your CSS styles
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
function Library() {
  const libraryStaff = [
    { name: 'Dr. Meena Gupta', role: 'Chief Librarian', img: image1 },
    { name: 'Mr. Rajiv Sharma', role: 'Assistant Librarian', img: image2 },
    { name: 'Ms. Anjali Rao', role: 'Digital Resource Manager', img: image1 },
  ];

  const carouselImages = [
    image1,
    image2,
     image1,
    image2,
     image1,
    image2,
     image1,
    image2,
     image1,
    image2,
    
  ];


  const services = [
    {
      title: 'Membership',
      description: 'Enables users to borrow books and access other library resources.'
    },
    {
      title: 'Digital Library',
      description: 'Access digital resources including eBooks, journals, and research papers online.'
    },
    {
      title: 'Book Bank',
      description: 'Provides textbooks to students for the entire semester on a rental basis.'
    },
    {
      title: 'Circulation Service',
      description: 'Helps in lending and returning books efficiently.'
    },
    {
      title: 'WEB OPAC - Online Catalogue',
      description: 'Allows users to search and locate books available in the library.'
    },
    {
      title: 'Reference List',
      description: 'Offers curated reading and reference lists for academic courses.'
    },
    {
      title: 'Ask a Librarian',
      description: 'Get assistance from a librarian for research and finding resources.'
    },
    {
      title: 'User Services',
      description: 'Personalized support and user education programs to optimize library usage.'
    }
  ];


  
  const resource = [
    {
      title: 'Membership',
      description: 'Enables users to borrow books and access other library resources.'
    },
    {
      title: 'Digital Library',
      description: 'Access digital resources including eBooks, journals, and research papers online.'
    },
    {
      title: 'Book Bank',
      description: 'Provides textbooks to students for the entire semester on a rental basis.'
    },
    {
      title: 'Circulation Service',
      description: 'Helps in lending and returning books efficiently.'
    },
    {
      title: 'WEB OPAC - Online Catalogue',
      description: 'Allows users to search and locate books available in the library.'
    },
    {
      title: 'Reference List',
      description: 'Offers curated reading and reference lists for academic courses.'
    },
    {
      title: 'Ask a Librarian',
      description: 'Get assistance from a librarian for research and finding resources.'
    },
    {
      title: 'User Services',
      description: 'Personalized support and user education programs to optimize library usage.'
    }
  ];

  return (
    <div className="library-section bg-light" style={{marginTop:"6rem"}}>
     

      {/* Horizontal Carousel */}
      <Container className="mb-5 zin">
        <div className="horizontal-carousel">
          <div className="horizontal-scroll">
            {carouselImages.map((src, i) => (
              <img key={i} src={src} alt={`Library ${i}`} className="carousel-image mx-2 shadow rounded" style={{ maxHeight: '350px', height: '350px', width: '450px', objectFit: 'cover' }} />
            ))}
          </div>
        </div>
      </Container>

      {/* About Section */}
      <Container id="about" className="mb-5">
        <h2 className="fw-bold text-center mb-4">About the Library</h2>
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <div style={{background: 'rgba(255,255,255,0.7)', borderRadius: '18px', boxShadow: '0 4px 24px #b0c4d6', padding: '1.5rem'}}>
              <img className="img-fluid rounded shadow alt" src={image1} alt="Library" style={{objectFit:'cover', width:'100%', minHeight:'220px', maxHeight:'320px'}} />
            </div>
          </Col>
          <Col md={6}>
            <div style={{background: 'rgba(255,255,255,0.7)', borderRadius: '18px', boxShadow: '0 4px 24px #b0c4d6', padding: '2rem 1.5rem',height: '50vh'}}>
              <p className="text-muted mb-0" style={{fontSize:'1.1rem', lineHeight:'1.7', marginTop:"2rem"}}>Our college library offers a vast collection of books, journals, and digital resources to support academic excellence. It is equipped with modern facilities, a digital section, and cozy reading spaces for students and faculty.</p>
            </div>
          </Col>
        </Row>

        <Row className="g-4 text-center mb-4">
          <Col md={4}>
            <Card className="p-4 shadow-lg border-0 rounded-4 vision-card" style={{background: 'linear-gradient(135deg, #e0f7fa 60%, #fff 100%)'}}>
              <Card.Body>
                <Card.Title className="fw-bold text-success fs-4 mb-2">🎯 Vision</Card.Title>
                <Card.Text style={{fontSize:'1.08rem'}}>To become a center of excellence for learning resources and knowledge sharing.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          
          
          <Col md={4}>
            <Card className="p-4 shadow-lg border-0 rounded-4 goals-card" style={{background: 'linear-gradient(135deg, #fffbe7 60%, #fff 100%)'}}>
              <Card.Body>
                <Card.Title className="fw-bold text-warning fs-4 mb-2">🎯 Misssion</Card.Title>
                <Card.Text style={{fontSize:'1.08rem'}}>To continuously update and innovate library services and improve student engagement.</Card.Text>
              </Card.Body>
            </Card>
          </Col>


           <Col md={4}>
            <Card className="p-4 shadow-lg border-0 rounded-4 goals-card" style={{background: 'linear-gradient(135deg, #fffbe7 60%, #fff 100%)'}}>
              <Card.Body>
                <Card.Title className="fw-bold text-warning fs-4 mb-2">🏆 Goals</Card.Title>
                <Card.Text style={{fontSize:'1.08rem'}}>To continuously update and innovate library services and improve student engagement.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        

        {/* Library Timing */}
        <div className="text-center mb-5">
          <Card className="p-4 shadow-lg border-0 rounded-4 w-100" style={{background: 'rgba(0, 123, 255, 0.08)', border: '1.5px solid #b6d4fe'}}>
            <Card.Body>
              <Card.Title className="fs-4 fw-bold text-primary mb-2">Library Timings</Card.Title>
              <Card.Text className="p-3 mb-0" style={{textAlign:"center", fontSize:'1.1rem', color:'#222'}}>Monday - Saturday: <b>9:00 AM to 7:00 PM</b><br />Sunday: <b>Closed</b></Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Types of Books */}
        <Row className="g-4 mb-4">
          <Col md={6}>
            <Card className="p-4 shadow-lg border-0 rounded-4">
              <Card.Body>
                <Card.Title className="fw-bold text-center">📗 Types of Books Available</Card.Title>
                <ul className="ps-3">
                  <li>Academic Textbooks</li>
                  <li>Reference Books</li>
                  <li>Fiction and Literature</li>
                  <li>Magazines and Periodicals</li>
                  <li>Research Publications</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 shadow-lg border-0 rounded-4" style={{height:"100%"}}>
              <Card.Body>
                <Card.Title className="fw-bold text-center">📚 Book Inventory</Card.Title>
                <Card.Text className="text-center mt-5" style={{textAlign:"center"}}>Total Books: 30,000+<br />Journals: 500+<br />eBooks: 10,000+</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Library Rules */}
        <Card className="p-4 shadow-lg border-0 rounded-4 mb-4">
          <Card.Body>
            <Card.Title className="fw-bold text-center text-danger">📌 Library Rules</Card.Title>
            <ul className="ps-3">
              <li>Maintain silence inside the library premises.</li>
              <li>Use of mobile phones is prohibited.</li>
              <li>Return books on or before the due date.</li>
              <li>Handle library resources with care.</li>
              <li>Access digital resources responsibly.</li>
            </ul>
          </Card.Body>
        </Card>

        {/* Library People */}
        
         <Row className="g-4 mt-5 scroll-animate">
                  <Col md={12}>
                    <h2 className="text-center fw-bold mb-4">👨‍🏫 Our Esteemed Faculty</h2>
                    <Row>
                      <Col md={4} className="mb-4 hover-animate">
                        <Card className="shadow border-0 rounded-4 text-center p-3 fade-in-up hover-animate faculty-card">
                          <Card.Img variant="top" src={image1} className="rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                          <Card.Body>
                            <Card.Title>Dr. Kavita Sharma</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Department of English</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={4} className="mb-4 hover-animate">
                        <Card className="shadow border-0 rounded-4 text-center p-3 fade-in-up delay-1 hover-animate faculty-card">
                          <Card.Img variant="top" src={image2} className="rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                          <Card.Body>
                            <Card.Title>Prof. Rajesh Verma</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Department of Physics</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={4} className="mb-4 hover-animate">
                        <Card className="shadow border-0 rounded-4 text-center p-3 fade-in-up delay-2 faculty-card">
                          <Card.Img variant="top" src={image1} className="rounded-circle mx-auto mt-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                          <Card.Body >
                            <Card.Title>Ms. Anjali Rao</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Department of Computer</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
        
      </Container>

       {/* Services Section */}
      <Container id="services" className="mb-5">
        <h3 className="fw-bold text-center mb-4">📘 Library Services</h3>
        <Row className="g-4">
          {services.map((service, i) => (
            <Col md={4} key={i}>
              <Card className="shadow-lg border-0 rounded-4 hover-scale">
                <Card.Body>
                  <Card.Title className="fw-bold text-center">{service.title}</Card.Title>
                  <Card.Text className="text-muted small text-center">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

     



        {/* Services Section */}
      <Container id="resources" className="mb-5">
        <h3 className="fw-bold text-center mb-4">📚 Featured Resources</h3>
        <Row className="g-4">
          {resource.map((service, i) => (
            <Col md={4} key={i}>
              <Card className="shadow-lg border-0 rounded-4 hover-scale">
                <Card.Body>
                  <Card.Title className="fw-bold text-center">{service.title}</Card.Title>
                  <Card.Text className="text-muted small text-center">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Digital Library */}
      <Container id="digital" className="mb-5">
        <h3 className="fw-bold text-center mb-4">🌐 Digital Library Access</h3>
        <p className="text-center text-muted">Access thousands of academic journals, eBooks, and research databases through our digital library platform from anywhere, anytime.</p>
      </Container>
    </div>
  );
}

export default Library;
