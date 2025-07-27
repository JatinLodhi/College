import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import '../Style/Achivements.css';

function Achivements() {
  const academicAchievements = [
    { text: '100% result in B.Sc. Computer Science for the year 2023', badge: 'Academic Excellence', icon: '📊' },
    { text: '12 research papers published in international journals by UG students', badge: 'Research', icon: '📚' },
    { text: '15 students cleared national level competitive exams (GATE, NET)', badge: 'Competitive', icon: '🎯' },
    { text: '3 faculty members received best paper awards at international conferences', badge: 'Recognition', icon: '🏆' }
  ];

  const coCurricularAchievements = [
    { text: 'First prize in State-level Debate Competition', badge: 'Debate', icon: '🎤' },
    { text: 'Team won the Regional Art and Craft Championship', badge: 'Arts', icon: '🎨' },
    { text: 'Secured 2nd position in the Inter-College Cultural Fest', badge: 'Cultural', icon: '💃' },
    { text: 'Street play team recognized by State Cultural Council', badge: 'Theatre', icon: '🎭' }
  ];

  const generalAchievements = [
    { text: 'Rewar College awarded "Best Emerging Institution" by State Education Board – 2024', badge: 'Institution Award', icon: '🏫' },
    { text: 'MoU signed with 3 international universities for research exchange', badge: 'International', icon: '🌍' },
    { text: 'Hosted National Innovation Summit with over 100+ participants', badge: 'Innovation', icon: '🧠' },
    { text: 'Campus innovation lab launched with modern prototyping tools', badge: 'Infrastructure', icon: '🛠️' }
  ];

  const renderAchievementItem = (item, index) => (
    <div key={index} className="achievement-item d-flex align-items-start mb-3 p-3 rounded-3">
      <div className="achievement-icon me-3">
        <span className="icon-circle">{item.icon}</span>
      </div>
      <div className="achievement-content flex-grow-1">
        <div className="d-flex align-items-center mb-2">
          <Badge bg="primary" className="me-2 achievement-badge">{item.badge}</Badge>
        </div>
        <p className="achievement-text mb-0">{item.text}</p>
      </div>
    </div>
  );

  return (
    <div className="achievements-section py-5 bg-gradient-light" style={{marginTop:"5rem"}}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            <span className="achievement-title-icon">🏅</span>
            Student Achievements
          </h1>
          <p className="lead text-muted">Celebrating excellence in academics, co-curricular activities, and institutional growth</p>
        </div>

        <Row className="g-4 justify-content-center">
          {/* General Achievements */}
          <Col lg={4} md={6}>
            <Card className="achievement-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-primary text-white text-center py-3">
                <h3 className="mb-0 fw-bold">
                  <span className="me-2">🏫</span>
                  College Achievements
                </h3>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="achievement-list">
                  {generalAchievements.map((item, idx) => renderAchievementItem(item, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Academic Achievements */}
          <Col lg={4} md={6}>
            <Card className="achievement-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-success text-white text-center py-3">
                <h3 className="mb-0 fw-bold">
                  <span className="me-2">📖</span>
                  Academic Excellence
                </h3>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="achievement-list">
                  {academicAchievements.map((item, idx) => renderAchievementItem(item, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Co-Curricular Achievements */}
          <Col lg={4} md={6}>
            <Card className="achievement-card h-100 border-0 shadow-lg">
              <Card.Header className="bg-warning text-dark text-center py-3">
                <h3 className="mb-0 fw-bold">
                  <span className="me-2">🎨</span>
                  Co-Curricular Activities
                </h3>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="achievement-list">
                  {coCurricularAchievements.map((item, idx) => renderAchievementItem(item, idx))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Statistics Section */}
        {/* <Row className="mt-5 pt-4">
          <Col md={12}>
            <Card className="border-0 shadow-lg bg-gradient-primary text-white">
              <Card.Body className="p-4">
                <h3 className="text-center mb-4 fw-bold">📈 Achievement Statistics</h3>
                <Row className="text-center">
                  <Col md={3} sm={6} className="mb-3">
                    <div className="stat-item">
                      <div className="stat-number fw-bold display-6">100%</div>
                      <div className="stat-label">Academic Results</div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="stat-item">
                      <div className="stat-number fw-bold display-6">12</div>
                      <div className="stat-label">Research Papers</div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="stat-item">
                      <div className="stat-number fw-bold display-6">15</div>
                      <div className="stat-label">Competitive Success</div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="stat-item">
                      <div className="stat-number fw-bold display-6">3</div>
                      <div className="stat-label">International Awards</div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Achivements;
