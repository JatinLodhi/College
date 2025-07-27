import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Nav, Tab } from 'react-bootstrap';
import '../Style/NCC.css';

function NCC() {
  const [activeTab, setActiveTab] = useState('ncc');

  const nccBoys = [
    { name: 'Cadet Rohit Sharma', rank: 'Senior Cadet', achievements: 'Best Cadet Award 2023' },
    { name: 'Cadet Karan Mehta', rank: 'Junior Cadet', achievements: 'Republic Day Parade Participant' },
    { name: 'Cadet Ajay Yadav', rank: 'Senior Cadet', achievements: 'Leadership Excellence Award' },
    { name: 'Cadet Vikas Thakur', rank: 'Junior Cadet', achievements: 'Discipline Award 2024' }
  ];

  const nccGirls = [
    { name: 'Cadet Riya Singh', rank: 'Senior Cadet', achievements: 'Best Female Cadet 2023' },
    { name: 'Cadet Nisha Gupta', rank: 'Junior Cadet', achievements: 'Cultural Performance Award' },
    { name: 'Cadet Swati Rawat', rank: 'Senior Cadet', achievements: 'Drill Competition Winner' },
    { name: 'Cadet Meena Joshi', rank: 'Junior Cadet', achievements: 'Community Service Award' }
  ];

  const nssMembers = [
    { name: 'Dr. Rekha Sharma', role: 'NSS Coordinator', department: 'Social Sciences' },
    { name: 'Prof. Deepak Rao', role: 'Faculty Member', department: 'Computer Science' },
    { name: 'Ms. Simran Kaur', role: 'Student Leader', department: 'Final Year B.Sc.' },
    { name: 'Mr. Aman Verma', role: 'Student Volunteer', department: 'Second Year B.Sc.' },
    { name: 'Ms. Priyanka Joshi', role: 'Student Volunteer', department: 'Third Year B.Sc.' }
  ];

  const nccActivities = [
    { activity: 'Participated in Republic Day Camp – 2024', type: 'National Event', date: 'January 2024' },
    { activity: 'Tree plantation drive conducted in July 2023', type: 'Environmental', date: 'July 2023' },
    { activity: 'Organized Swachh Bharat Abhiyan campaign on campus', type: 'Social Service', date: 'October 2023' },
    { activity: 'Self-defense workshop conducted for local schools', type: 'Training', date: 'December 2023' },
    { activity: 'Military training camp at Army Base', type: 'Training', date: 'March 2024' },
    { activity: 'Flag hoisting ceremony on Independence Day', type: 'Patriotic', date: 'August 2023' }
  ];

  const nssActivities = [
    { activity: 'Blood Donation Camp – March 2024', type: 'Health Service', date: 'March 2024', participants: 150 },
    { activity: 'Clean India Drive – October 2023', type: 'Environmental', date: 'October 2023', participants: 200 },
    { activity: 'Tree Plantation – July 2023', type: 'Environmental', date: 'July 2023', participants: 100 },
    { activity: 'Digital Literacy Workshop – December 2023', type: 'Education', date: 'December 2023', participants: 80 },
    { activity: 'Road Safety Awareness Week – Jan 2024', type: 'Awareness', date: 'January 2024', participants: 120 }
  ];

  const awards = [
    { award: 'State NSS Best Unit Award – 2023', category: 'Institutional', year: '2023' },
    { award: 'Best Volunteer (Female) – Simran Kaur – 2023', category: 'Individual', year: '2023' },
    { award: 'District Social Impact Award – 2022', category: 'Community', year: '2022' },
    { award: 'Clean Campus Campaign Champion – 2021', category: 'Environmental', year: '2021' },
    { award: 'NCC Best Unit Award – 2024', category: 'Military', year: '2024' },
    { award: 'Best Cadet Award – Rohit Sharma', category: 'Individual', year: '2023' }
  ];

  const renderMemberCard = (member, type) => (
    <div key={member.name} className="member-card d-flex align-items-center p-3 mb-3 rounded-3">
      <div className="member-avatar me-3">
        <span className="avatar-circle">{type === 'ncc' ? '🪖' : '🤝'}</span>
      </div>
      <div className="member-info flex-grow-1">
        <h6 className="mb-1 fw-bold">{member.name}</h6>
        <Badge bg={type === 'ncc' ? 'success' : 'danger'} className="me-2">{member.rank || member.role}</Badge>
        {member.department && <Badge bg="secondary">{member.department}</Badge>}
        {member.achievements && <p className="mb-0 mt-1 small text-muted">{member.achievements}</p>}
      </div>
    </div>
  );

  const renderActivityCard = (activity, type) => (
    <div key={activity.activity} className="activity-card p-3 mb-3 rounded-3">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <Badge bg={type === 'ncc' ? 'success' : 'danger'}>{activity.type}</Badge>
        <small className="text-muted">{activity.date}</small>
      </div>
      <h6 className="mb-2">{activity.activity}</h6>
      {activity.participants && (
        <small className="text-info">👥 {activity.participants} participants</small>
      )}
    </div>
  );

  return (
    <div className="ncc-section py-5 bg-gradient-light" style={{marginTop:"5rem"}}  >
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            <span className="title-icon">🪖🤝</span>
            NCC & NSS Units
          </h1>
          <p className="lead text-muted">National Cadet Corps & National Service Scheme - Building Leaders, Serving Society</p>
        </div>

        {/* Navigation Tabs */}
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <Nav variant="pills" className="justify-content-center" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
              <Nav.Item>
                <Nav.Link eventKey="ncc" className="fw-bold">
                  🪖 NCC Unit
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="nss" className="fw-bold">
                  🤝 NSS Unit
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Tab.Container activeKey={activeTab}>
          <Tab.Content>
            {/* NCC Tab */}
            <Tab.Pane eventKey="ncc">
              <Row className="g-4">
                {/* About NCC */}
                <Col lg={6}>
                  <Card className="info-card h-100 border-0 shadow-lg">
                    <Card.Header className="bg-success text-white text-center py-3">
                      <h4 className="mb-0 fw-bold">About NCC</h4>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className="mb-3 " style={{color:"black"}}>The NCC unit at Rewar College aims to develop discipline, leadership, and service-mindedness in students. It offers military training to both boys and girls and provides opportunities to participate in national-level camps and parades.</p>
                      <div className="d-flex align-items-center">
                        <Badge bg="success" className="me-2">Military Training</Badge>
                        <Badge bg="success" className="me-2">Leadership</Badge>
                        <Badge bg="success">Patriotism</Badge>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* NCC Objective */}
                <Col lg={6}>
                  <Card className="info-card h-100 border-0 shadow-lg">
                    <Card.Header className="bg-success text-white text-center py-3">
                      <h4 className="mb-0 fw-bold">NCC Objectives</h4>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <ul className="list-unstyled">
                        <li className="mb-2">🎯 Instill values of patriotism and character</li>
                        <li className="mb-2">👥 Develop leadership and comradeship</li>
                        <li className="mb-2">🏛️ Prepare for service to the nation</li>
                        <li className="mb-2">⚔️ Provide military training opportunities</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>

                {/* NCC Boys */}
                <Col lg={6}>
                  <Card className="member-card-container h-100 border-0 shadow-lg">
                    <Card.Header className="bg-primary text-white text-center py-3">
                      <h4 className="mb-0 fw-bold">🪖 NCC Boys</h4>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <div className="member-list">
                        {nccBoys.map((member) => renderMemberCard(member, 'ncc'))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* NCC Girls */}
                <Col lg={6}>
                  <Card className="member-card-container h-100 border-0 shadow-lg">
                    <Card.Header className="bg-primary text-white text-center py-3">
                      <h4 className="mb-0 fw-bold">🪖 NCC Girls</h4>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <div className="member-list">
                        {nccGirls.map((member) => renderMemberCard(member, 'ncc'))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* NCC Activities */}
                <Col lg={12}>
                  <Card className="activity-card-container border-0 shadow-lg">
                    <Card.Header className="bg-success text-white text-center py-3">
                      <h4 className="mb-0 fw-bold">📋 NCC Activities & Reports</h4>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <Row>
                        {nccActivities.map((activity, idx) => (
                          <Col md={6} lg={4} key={idx}>
                            {renderActivityCard(activity, 'ncc')}
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab.Pane>

            {/* NSS Tab */}
            <Tab.Pane eventKey="nss">
              <Row className="g-4">
                {/* About NSS */}
                <Col lg={6}>
                  <Card className="info-card h-100 border-0 shadow-lg">
                    <Card.Header className="bg-danger text-white text-center py-3">
                      <h4 className="mb-0 fw-bold">About NSS</h4>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <p className="mb-3" style={{marginTop:"2rem", color:"black"}}>The NSS unit at Rewar College is a platform for youth development through community service. It empowers students to contribute meaningfully to society while building leadership, empathy, and civic responsibility.</p>
                      <div className="d-flex align-items-center">
                        <Badge bg="danger" className="me-2">Community Service</Badge>
                        <Badge bg="danger" className="me-2">Social Development</Badge>
                        <Badge bg="danger">Volunteerism</Badge>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* NSS Members */}
                <Col lg={6}>
                  <Card className="member-card-container h-100 border-0 shadow-lg">
                    <Card.Header className="bg-danger text-white text-center py-3">
                      <h4 className="mb-0 fw-bold">🤝 NSS Members</h4>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <div className="member-list">
                        {nssMembers.map((member) => renderMemberCard(member, 'nss'))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* NSS Activities */}
                <Col lg={8}>
                  <Card className="activity-card-container border-0 shadow-lg">
                    <Card.Header className="bg-danger text-white text-center py-3">
                      <h4 className="mb-0 fw-bold">📋 NSS Activities</h4>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <Row>
                        {nssActivities.map((activity, idx) => (
                          <Col md={6} key={idx}>
                            {renderActivityCard(activity, 'nss')}
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Awards */}
                <Col lg={4}>
                  <Card className="awards-card border-0 shadow-lg p-3 mt-2">
                    <Card.Header className="bg-warning text-dark text-center py-3">
                      <h4 className="mb-0 fw-bold">🏆 Awards & Recognition</h4>
                    </Card.Header>
                    <Card.Body className="p-4">
                      <div className="awards-list">
                        {awards.map((award, idx) => (
                          <div key={idx} className="award-item p-3 mb-3 rounded-3">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <Badge bg="warning" text="dark">{award.category}</Badge>
                              <small className="text-muted">{award.year}</small>
                            </div>
                            <h6 className="mb-0">{award.award}</h6>
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default NCC;
