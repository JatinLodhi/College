import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import "../Style/R.css";
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';

function RCollege() {
  const galleryImages = [
    image1, image1, image2, image1, image1, image2, image1, image1, image2
  ];

  const facilities = [
    { facility: 'Modern Classrooms with Smart Boards', type: 'Academic', status: 'Available', capacity: '500+ students' },
    { facility: 'Central Library with 50,000+ Volumes', type: 'Academic', status: 'Available', capacity: '24/7 access' },
    { facility: 'Computer and Language Labs', type: 'Technical', status: 'Available', capacity: '200+ systems' },
    { facility: 'Sports Complex and Gymnasium', type: 'Recreational', status: 'Available', capacity: 'Full facilities' },
    { facility: 'Canteen and Health Care Center', type: 'Support', status: 'Available', capacity: '24/7 service' }
  ];

  const academicPrograms = [
    { program: 'Bachelor of Science (B.Sc)', duration: '3 Years', seats: 120, specializations: 'Physics, Chemistry, Mathematics' },
    { program: 'Bachelor of Arts (B.A)', duration: '3 Years', seats: 100, specializations: 'English, History, Political Science' },
    { program: 'Master of Commerce (M.Com)', duration: '2 Years', seats: 60, specializations: 'Finance, Marketing, HR' },
    { program: 'Postgraduate Diplomas', duration: '1 Year', seats: 40, specializations: 'Computer Applications, Business' },
    { program: 'Certification Courses', duration: '6 Months', seats: 80, specializations: 'Digital Skills, Languages' }
  ];

  const clubs = [
    { club: 'Art & Photography Club', type: 'Creative', members: 45, activities: 'Exhibitions, Workshops' },
    { club: 'Theatre & Drama Society', type: 'Cultural', members: 30, activities: 'Plays, Performances' },
    { club: 'Science & Innovation Cell', type: 'Technical', members: 60, activities: 'Research, Projects' },
    { club: 'Yoga & Wellness Group', type: 'Health', members: 50, activities: 'Sessions, Retreats' },
    { club: 'Entrepreneurship Cell', type: 'Business', members: 40, activities: 'Startup Support' },
    { club: 'Literary & Debate Forum', type: 'Academic', members: 35, activities: 'Debates, Competitions' }
  ];

  const renderFacilityCard = (facility, index) => (
    <div key={index} className="facility-card d-flex align-items-center p-3 mb-3 rounded-3" >
      <div className="facility-icon me-3">
        <span className="icon-circle" >🏢</span>
      </div>
      <div className="facility-info flex-grow-1">
        <h6 className="mb-1 fw-bold" style={{color:"black"}}>{facility.facility}</h6>
        <Badge bg="primary" className="me-2" style={{color:"black"}}>{facility.type}</Badge>
        <Badge bg="success">{facility.status}</Badge>
        <p className="mb-0 mt-1 small text-muted" style={{color:"black"}}>Capacity: {facility.capacity}</p>
      </div>
    </div>
  );

  const renderProgramCard = (program, index) => (
    <div key={index} className="program-card p-3 mb-3 rounded-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <Badge bg="success">{program.duration}</Badge>
        <small className="text-muted">{program.seats} seats</small>
      </div>
      <h6 className="mb-2">{program.program}</h6>
      <small className="text-info">📚 {program.specializations}</small>
    </div>
  );

  const renderClubCard = (club, index) => (
    <div key={index} className="club-card p-3 rounded-3 h-100 w-100">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <Badge bg="warning" text="dark">{club.type}</Badge>
        <small className="text-muted">{club.members} members</small>
      </div>
      <h6 className="mb-2">{club.club}</h6>
      <small className="text-info">🎯 {club.activities}</small>
    </div>
  );

  return (
    <div className="rcollege-section py-5 bg-gradient-light " style={{marginTop:"5rem"}}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            <span className="title-icon">🏫</span>
            Rewar College
          </h1>
          <p className="lead text-muted">A beacon of educational excellence, fostering academic brilliance and holistic development</p>
        </div>

        <Row className="g-4 justify-content-center">
          {/* About College */}
          <Col lg={6}>
            <Card className="info-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h4 className="mb-0 fw-bold">About the College</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <p className="mb-3" style={{color:'#232526'}}>Rewar College is a beacon of educational excellence, committed to nurturing academic brilliance, innovation, and holistic development. The college offers a wide array of undergraduate and postgraduate programs supported by cutting-edge infrastructure and experienced faculty.</p>
                <div className="d-flex align-items-center">
                  <Badge bg="primary" className="me-2">Excellence</Badge>
                  <Badge bg="primary" className="me-2">Innovation</Badge>
                  <Badge bg="primary">Development</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* College Culture */}
          <Col lg={6}>
            <Card className="info-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h4 className="mb-0 fw-bold">College Culture</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <p className="mb-3" style={{color:'#232526'}}>Rewar College encourages a dynamic cultural environment through festivals, art events, literary debates, music and dance clubs. These activities foster creativity, teamwork, and inclusivity among students.</p>
                <div className="d-flex align-items-center">
                  <Badge bg="primary" className="me-2">Cultural</Badge>
                  <Badge bg="primary" className="me-2">Creative</Badge>
                  <Badge bg="primary">Inclusive</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Facilities */}
          <Col lg={6}>
            <Card className="facility-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-success text-white text-center py-3">
                <h4 className="mb-0 fw-bold">🏢 Campus Facilities</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="facility-list">
                  {facilities.map((facility, idx) => renderFacilityCard(facility, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Academic Programs */}
          <Col lg={6}>
            <Card className="program-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-info text-white text-center py-3">
                <h4 className="mb-0 fw-bold">📚 Academic Programs</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="program-list">
                  {academicPrograms.map((program, idx) => renderProgramCard(program, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Clubs & Societies */}
          <Col lg={8}>
            <Card className="club-card-container border-0 shadow-lg">
              <Card.Header className="bg-warning text-dark text-center py-3">
                <h4 className="mb-0 fw-bold">🎭 Clubs & Societies</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <Row className="g-3">
                  {clubs.map((club, idx) => (
                    <Col md={6} key={idx} className="d-flex">
                      {renderClubCard(club, idx)}
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Vision & Mission */}
          <Col lg={4}>
            <Card className="vision-mission-card border-0 shadow-lg" style={{height:"100%"}}>
              <Card.Header className="bg-danger text-white text-center py-3">
                <h4 className="mb-0 fw-bold">🎯 Vision & Mission</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="vision-mission-list">
                  <div className="vision-item p-3 mb-3 rounded-3">
                    <h6 className="mb-2 fw-bold text-warning">Our Vision</h6>
                    <p className="mb-0 small">To emerge as a globally recognized institution fostering academic excellence and innovation while nurturing responsible global citizens.</p>
                  </div>
                  <div className="mission-item p-3 mb-3 rounded-3">
                    <h6 className="mb-2 fw-bold text-warning">Our Mission</h6>
                    <p className="mb-0 small">To provide quality education, encourage research, and promote inclusivity, integrity, and service to society.</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Image Gallery */}
          <Col lg={12}>
            <Card className="gallery-card-container border-0 shadow-lg">
              <Card.Header className="bg-secondary text-white text-center py-3">
                <h4 className="mb-0 fw-bold">📸 Campus Gallery</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <Row className="g-3 gallery-row">
                  {galleryImages.map((src, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index} className="d-flex">
                      <Card className="shadow-lg border-0 rounded-4 hover-effect smooth-card gallery-card flex-fill h-100">
                        <Card.Img variant="top" src={src} className="rounded-top gallery-img" />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RCollege;
