import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap';
import '../Style/Journals.css';
import  myPhoto from "../assets/Screenshot 2025-06-22 214533.png"; // Import your CSS styles
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';


function Reports() {
  const annualReports = [
    {
      title: 'Annual Report 2023-24',
      year: 2024,
      type: 'Annual Report',
      description: 'Comprehensive overview of academic achievements, student performance, infrastructure development, and institutional growth for the academic year 2023-24.',
      thumbnail: image1,
      status: 'Published',
      fileSize: '15.2 MB',
      pages: 156,
      highlights: [
        'Student enrollment increased by 12%',
        'New computer lab inaugurated',
        'Research publications: 45 papers',
        'Placement rate: 85%'
      ]
    },
    {
      title: 'Annual Report 2022-23',
      year: 2023,
      type: 'Annual Report',
      description: 'Detailed analysis of academic performance, faculty development, research initiatives, and student achievements during 2022-23.',
      thumbnail: image2,
      status: 'Published',
      fileSize: '12.8 MB',
      pages: 142,
      highlights: [
        'NAAC accreditation renewed',
        'New departments established',
        'International collaborations: 8',
        'Student satisfaction: 92%'
      ]
    },
    {
      title: 'Annual Report 2021-22',
      year: 2022,
      type: 'Annual Report',
      description: 'Comprehensive report covering academic excellence, infrastructure projects, community outreach, and future development plans.',
      thumbnail: image1,
      status: 'Published',
      fileSize: '11.5 MB',
      pages: 128,
      highlights: [
        'Digital transformation initiatives',
        'Green campus certification',
        'Industry partnerships: 15',
        'Faculty development programs'
      ]
    }
  ];

  const financialReports = [
    {
      title: 'Financial Report 2023-24',
      year: 2024,
      type: 'Financial Report',
      description: 'Detailed financial statements including income, expenditure, budget allocation, and audit reports for the fiscal year 2023-24.',
      thumbnail: image2,
      status: 'Published',
      fileSize: '8.7 MB',
      pages: 89,
      highlights: [
        'Total Revenue: ₹12.5 Crores',
        'Infrastructure Investment: ₹2.3 Crores',
        'Research Funding: ₹1.8 Crores',
        'Student Scholarships: ₹45 Lakhs'
      ]
    },
    {
      title: 'Financial Report 2022-23',
      year: 2023,
      type: 'Financial Report',
      description: 'Comprehensive financial analysis including budget performance, capital expenditure, and financial sustainability measures.',
      thumbnail: image1,
      status: 'Published',
      fileSize: '7.9 MB',
      pages: 76,
      highlights: [
        'Total Revenue: ₹11.2 Crores',
        'Technology Investment: ₹1.5 Crores',
        'Library Enhancement: ₹35 Lakhs',
        'Sports Infrastructure: ₹28 Lakhs'
      ]
    }
  ];

  const upcomingReports = [
    'Annual Report 2024-25 - Expected: June 2025',
    'Financial Report 2024-25 - Expected: July 2025',
    'Sustainability Report 2024-25 - Expected: August 2025'
  ];

  const reportCategories = [
    'Academic Performance Reports',
    'Financial Statements',
    'Infrastructure Development',
    'Research & Innovation',
    'Student Achievements',
    'Faculty Development',
    'Community Outreach',
    'Quality Assurance'
  ];

  const [selectedReport, setSelectedReport] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('annual');

  const handleShowDetails = (report) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="reports-section py-5 bg-light animate__animated animate__fadeIn"  style={{marginTop:"5rem"}}>
      <Container>
        <h1 className="text-center mb-5 display-4 fw-bold animate__fadeInDown">📊 College Reports</h1>
        <p className="text-center text-muted mb-5">Comprehensive annual and financial reports showcasing our institutional performance and achievements</p>

        {/* Tab Navigation */}
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <div className="btn-group" role="group">
              <Button 
                variant={activeTab === 'annual' ? 'primary' : 'outline-primary'}
                onClick={() => setActiveTab('annual')}
                className="me-2"
              >
                📈 Annual Reports
              </Button>
              <Button 
                variant={activeTab === 'financial' ? 'primary' : 'outline-primary'}
                onClick={() => setActiveTab('financial')}
              >
                💰 Financial Reports
              </Button>
            </div>
          </Col>
        </Row>

        {/* Reports Display */}
        <Row className="g-4 justify-content-center">
          {(activeTab === 'annual' ? annualReports : financialReports).map((report, index) => (
            <Col key={index} md={4} className="animate__animated animate__zoomIn">
              <Card className="shadow-lg border-0 rounded-4 hover-effect">
                <Card.Img variant="top" src={report.thumbnail} className="rounded-top ad" />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Badge bg="success" className="mb-2">{report.status}</Badge>
                    <Badge bg="info">{report.type}</Badge>
                  </div>
                  <Card.Title className="fw-bold text-center">{report.title}</Card.Title>
                  <Card.Text className="text-muted small">
                    📄 {report.pages} pages • 📁 {report.fileSize}
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button variant="primary" onClick={() => handleShowDetails(report)}>View Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal for Report Details */}
        <Modal show={showModal} onHide={handleClose} centered size="lg" className="animate__animated animate__zoomIn">
          {selectedReport && (
            <Modal.Body className="p-4">
              <Card className="shadow-lg border-0 rounded-4">
                <Card.Img variant="top" src={selectedReport.thumbnail} className="rounded-top ad1" />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <Card.Title className="fw-bold text-primary">{selectedReport.title}</Card.Title>
                    <Badge bg="success">{selectedReport.status}</Badge>
                  </div>
                  <Card.Text><strong>Type:</strong> {selectedReport.type}</Card.Text>
                  <Card.Text><strong>Year:</strong> {selectedReport.year}</Card.Text>
                  <Card.Text><strong>Pages:</strong> {selectedReport.pages}</Card.Text>
                  <Card.Text><strong>File Size:</strong> {selectedReport.fileSize}</Card.Text>
                  <Card.Text><strong>Description:</strong> {selectedReport.description}</Card.Text>
                  
                  <div className="mt-3">
                    <h6 className="fw-bold">📊 Key Highlights:</h6>
                    <ul className="list-unstyled">
                      {selectedReport.highlights.map((highlight, index) => (
                        <li key={index} className="mb-1">• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center mt-4">
                    <Button variant="success" className="me-2">
                      📥 Download PDF
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                  </div>
                </Card.Body>
              </Card>
            </Modal.Body>
          )}
        </Modal>

        {/* Upcoming Reports */}
        <Row className="mt-5">
          <Col md={12}>
            <Card className="p-4 shadow-lg border-0 rounded-4">
              <Card.Body>
                <Card.Title className="text-center fw-bold text-warning">📅 Upcoming Reports</Card.Title>
                <Row className="mt-3 g-3 justify-content-center">
                  {upcomingReports.map((report, index) => (
                    <Col md={4} sm={6} xs={12} key={index}>
                      <div className="upcoming-report-box p-3 text-center border rounded h-100 bg-light">
                        <span role="img" aria-label="report">📋</span> {report}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Report Categories */}
        <Row className="mt-4 animate__animated animate__fadeInUp">
          <Col md={12}>
            <Card className="p-4 shadow-lg border-0 rounded-4">
              <Card.Body>
                <Card.Title className="text-center fw-bold"  style={{color:"black"}}>📂 Report Categories</Card.Title>
                <Row className="mt-3">
                  {reportCategories.map((category, index) => (
                    <Col key={index} md={3} className="mb-2" style={{color:"black"}}>
                      <div className="text-center p-2 border rounded">
                        <small className="text-muted" style={{color:"black"}}>{category}</small>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact for Reports */}
        <Row className="mt-4 animate__animated animate__fadeInUp">
          <Col md={12} className="text-center">
            <Card className="p-4 shadow-lg border-0 rounded-4">
              <Card.Body>
                <Card.Title className="fw-bold text-danger">📞 Request Reports</Card.Title>
                <p className="mt-3">For specific reports or additional information, please contact our administrative office:</p>
                <div className="row text-center">
                  <div className="col-md-4">
                    <strong>📧 Email:</strong><br />
                    <small>reports@college.edu</small>
                  </div>
                  <div className="col-md-4">
                    <strong>📞 Phone:</strong><br />
                    <small>+91-123-456-7890</small>
                  </div>
                  <div className="col-md-4">
                    <strong>🏢 Office:</strong><br />
                    <small>Administrative Block, Room 101</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Reports;
