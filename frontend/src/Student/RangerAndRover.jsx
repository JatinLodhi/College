import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import '../Style/SportsFacilities.css';

function SportsFacilities() {
  const facilities = [
    { name: 'Multi-Purpose Indoor Stadium', type: 'Indoor', capacity: '500 people', status: 'Available' },
    { name: 'Football Ground', type: 'Outdoor', capacity: 'Full size field', status: 'Available' },
    { name: 'Basketball Court', type: 'Outdoor', capacity: '2 courts', status: 'Available' },
    { name: 'Cricket Ground', type: 'Outdoor', capacity: 'Standard pitch', status: 'Available' },
    { name: 'Table Tennis Room', type: 'Indoor', capacity: '4 tables', status: 'Available' },
    { name: 'Gymnasium', type: 'Indoor', capacity: '50 people', status: 'Available' }
  ];

  const equipment = [
    { item: 'Football Balls (20)', category: 'Football', condition: 'Good', quantity: 20 },
    { item: 'Cricket Bats (15)', category: 'Cricket', condition: 'Good', quantity: 15 },
    { item: 'Basketballs (10)', category: 'Basketball', condition: 'Excellent', quantity: 10 },
    { item: 'Table Tennis Tables (4)', category: 'Table Tennis', condition: 'Good', quantity: 4 },
    { item: 'Gym Equipment Set', category: 'Fitness', condition: 'Excellent', quantity: 1 },
    { item: 'Badminton Rackets (25)', category: 'Badminton', condition: 'Good', quantity: 25 }
  ];

  const activities = [
    { activity: 'Inter-College Football Tournament', type: 'Tournament', date: 'March 2024', participants: 120 },
    { activity: 'Annual Sports Meet', type: 'Competition', date: 'February 2024', participants: 300 },
    { activity: 'Basketball League', type: 'League', date: 'January 2024', participants: 80 },
    { activity: 'Cricket Championship', type: 'Championship', date: 'December 2023', participants: 150 },
    { activity: 'Table Tennis Tournament', type: 'Tournament', date: 'November 2023', participants: 60 },
    { activity: 'Fitness Training Program', type: 'Training', date: 'Ongoing', participants: 100 }
  ];

  const staff = [
    { name: 'Mr. Rajesh Kumar', role: 'Sports Director', department: 'Physical Education', specialization: 'Football & Cricket' },
    { name: 'Ms. Priya Sharma', role: 'Assistant Sports Director', department: 'Physical Education', specialization: 'Basketball & Athletics' },
    { name: 'Mr. Amit Singh', role: 'Gym Instructor', department: 'Fitness', specialization: 'Strength Training' },
    { name: 'Ms. Neha Patel', role: 'Sports Coordinator', department: 'Physical Education', specialization: 'Table Tennis & Badminton' },
    { name: 'Mr. Deepak Verma', role: 'Groundsman', department: 'Maintenance', specialization: 'Ground Maintenance' }
  ];

  const renderFacilityCard = (facility, index) => (
    <div key={index} className="facility-card d-flex align-items-center p-3 mb-3 rounded-3">
      <div className="facility-icon me-3">
        <span className="icon-circle">🏟️</span>
      </div>
      <div className="facility-info flex-grow-1">
        <h6 className="mb-1 fw-bold">{facility.name}</h6>
        <Badge bg="primary" className="me-2">{facility.type}</Badge>
        <Badge bg="secondary">{facility.capacity}</Badge>
        <Badge bg="success" className="ms-2">{facility.status}</Badge>
      </div>
    </div>
  );

  const renderEquipmentCard = (equipment, index) => (
    <div key={index} className="equipment-card p-3 mb-3 rounded-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <Badge bg="info">{equipment.category}</Badge>
        <Badge bg={equipment.condition === 'Excellent' ? 'success' : 'warning'} text="dark">{equipment.condition}</Badge>
      </div>
      <h6 className="mb-2">{equipment.item}</h6>
      <small className="text-info">📦 Quantity: {equipment.quantity}</small>
    </div>
  );

  const renderActivityCard = (activity, index) => (
    <div key={index} className="activity-card p-3 mb-3 rounded-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <Badge bg="success">{activity.type}</Badge>
        <small className="text-muted">{activity.date}</small>
      </div>
      <h6 className="mb-2">{activity.activity}</h6>
      <small className="text-info">👥 {activity.participants} participants</small>
    </div>
  );

  const renderStaffCard = (staff, index) => (
    <div key={index} className="staff-card d-flex align-items-center p-3 mb-3 rounded-3">
      <div className="staff-avatar me-3">
        <span className="avatar-circle">👨‍🏫</span>
      </div>
      <div className="staff-info flex-grow-1">
        <h6 className="mb-1 fw-bold">{staff.name}</h6>
        <Badge bg="primary" className="me-2">{staff.role}</Badge>
        <Badge bg="secondary">{staff.department}</Badge>
        <p className="mb-0 mt-1 small text-muted">Specialization: {staff.specialization}</p>
      </div>
    </div>
  );

  return (
    <div className="sports-facilities-section py-5 bg-gradient-light" style={{marginTop:"5rem"}}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            <span className="title-icon">🏟️</span>
            Sports Facilities
          </h1>
          <p className="lead text-muted">State-of-the-art sports infrastructure for holistic development</p>
        </div>

        <Row className="g-4 justify-content-center">
          {/* About Sports Facilities */}
          <Col lg={6}>
            <Card className="info-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h4 className="mb-0 fw-bold">About Our Facilities</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <p className="mb-3" style={{color:"black"}}>Rewar College boasts world-class sports facilities including indoor and outdoor stadiums, modern gymnasium, and specialized courts for various sports. Our facilities promote physical fitness, sportsmanship, and competitive excellence among students.</p>
                <div className="d-flex align-items-center">
                  <Badge bg="primary" className="me-2">Indoor</Badge>
                  <Badge bg="primary" className="me-2">Outdoor</Badge>
                  <Badge bg="primary">Fitness</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Facilities Overview */}
          <Col lg={6}>
            <Card className="info-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h4 className="mb-0 fw-bold">Facilities Overview</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <ul className="list-unstyled">
                  <li className="mb-2">🏟️ Multi-purpose indoor stadium</li>
                  <li className="mb-2">⚽ Professional football ground</li>
                  <li className="mb-2">🏀 Basketball courts</li>
                  <li className="mb-2">🏏 Cricket ground with pavilion</li>
                  <li className="mb-2">🏓 Table tennis facilities</li>
                  <li className="mb-2">💪 Modern gymnasium</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Sports Facilities */}
          <Col lg={6}>
            <Card className="facility-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-success text-white text-center py-3">
                <h4 className="mb-0 fw-bold">🏟️ Sports Facilities</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="facility-list">
                  {facilities.map((facility, idx) => renderFacilityCard(facility, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Sports Equipment */}
          <Col lg={6}>
            <Card className="equipment-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-info text-white text-center py-3">
                <h4 className="mb-0 fw-bold">⚽ Sports Equipment</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="equipment-list">
                  {equipment.map((equipment, idx) => renderEquipmentCard(equipment, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Sports Staff */}
          <Col lg={6}>
            <Card className="staff-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-warning text-dark text-center py-3">
                <h4 className="mb-0 fw-bold">👨‍🏫 Sports Staff</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="staff-list">
                  {staff.map((staff, idx) => renderStaffCard(staff, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Sports Activities */}
          <Col lg={6}>
            <Card className="activity-card-container h-100 border-0 shadow-lg">
              <Card.Header className="bg-danger text-white text-center py-3">
                <h4 className="mb-0 fw-bold">🎯 Sports Activities</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="activity-list">
                  {activities.map((activity, idx) => renderActivityCard(activity, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SportsFacilities;
