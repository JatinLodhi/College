import React, { useState } from 'react';
import { Container, Card, Button, Collapse, Row, Col, Badge, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Departments.css';

const departments = [
  {
    name: 'Computer Science',
    description: 'Modern computing and software development',
    staff: 8,
    courses: ['B.Sc Computer Science', 'M.Sc Computer Science', 'BCA'],
    color: '#3b82f6',
    about: 'The Computer Science Department focuses on modern computing technologies, software development, and digital innovation. Our curriculum covers programming, algorithms, database systems, and emerging technologies like AI and machine learning.',
    staffMembers: [
      'Dr. Rajesh Kumar - Head of Department',
      'Prof. Priya Sharma - Programming Languages',
      'Dr. Amit Patel - Database Systems',
      'Ms. Neha Singh - Web Development',
      'Prof. Sanjay Verma - Artificial Intelligence',
      'Dr. Kavita Rao - Software Engineering',
      'Mr. Rahul Gupta - Computer Networks',
      'Ms. Anjali Desai - Data Structures'
    ],
    researchAreas: ['Artificial Intelligence', 'Machine Learning', 'Web Development', 'Database Systems', 'Software Engineering', 'Computer Networks'],
    activities: ['Annual Tech Fest', 'Coding Competitions', 'Industry Workshops', 'Project Exhibitions', 'Guest Lectures', 'Internship Programs']
  },
  {
    name: 'Physics',
    description: 'Fundamental laws of nature and matter',
    staff: 6,
    courses: ['B.Sc Physics', 'M.Sc Physics'],
    color: '#8b5cf6',
    about: 'The Physics Department explores the fundamental laws governing the universe. Our research spans classical mechanics, quantum physics, optics, and modern physics applications.',
    staffMembers: [
      'Dr. Meenakshi Iyer - Head of Department',
      'Prof. Arun Kumar - Classical Mechanics',
      'Dr. Sunita Patel - Quantum Physics',
      'Prof. Rajesh Malhotra - Optics',
      'Dr. Priya Sharma - Electronics',
      'Mr. Amit Singh - Experimental Physics'
    ],
    researchAreas: ['Quantum Mechanics', 'Optics & Photonics', 'Electronics', 'Material Science', 'Astrophysics', 'Nuclear Physics'],
    activities: ['Physics Olympiad', 'Science Exhibitions', 'Research Seminars', 'Laboratory Workshops', 'Industry Visits', 'Conference Participation']
  },
  {
    name: 'Chemistry',
    description: 'Study of matter and its transformations',
    staff: 7,
    courses: ['B.Sc Chemistry', 'M.Sc Chemistry'],
    color: '#10b981',
    about: 'The Chemistry Department focuses on understanding matter and its transformations. We cover organic, inorganic, physical, and analytical chemistry with modern laboratory facilities.',
    staffMembers: [
      'Dr. Suresh Kumar - Head of Department',
      'Prof. Anita Desai - Organic Chemistry',
      'Dr. Rajesh Patel - Inorganic Chemistry',
      'Prof. Meera Sharma - Physical Chemistry',
      'Dr. Sunil Verma - Analytical Chemistry',
      'Ms. Priya Singh - Biochemistry',
      'Mr. Amit Kumar - Industrial Chemistry'
    ],
    researchAreas: ['Organic Synthesis', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry', 'Biochemistry', 'Industrial Chemistry'],
    activities: ['Chemistry Olympiad', 'Laboratory Demonstrations', 'Research Projects', 'Industry Collaborations', 'Science Fairs', 'Chemical Safety Workshops']
  },
  {
    name: 'Mathematics',
    description: 'Pure and applied mathematical sciences',
    staff: 5,
    courses: ['B.Sc Mathematics', 'M.Sc Mathematics'],
    color: '#f59e0b',
    about: 'The Mathematics Department provides a strong foundation in both pure and applied mathematics. Our curriculum includes algebra, calculus, statistics, and mathematical modeling.',
    staffMembers: [
      'Dr. Ramesh Kumar - Head of Department',
      'Prof. Sunita Patel - Algebra',
      'Dr. Amit Sharma - Calculus',
      'Prof. Priya Verma - Statistics',
      'Mr. Rajesh Singh - Mathematical Modeling'
    ],
    researchAreas: ['Algebra', 'Calculus', 'Statistics', 'Mathematical Modeling', 'Number Theory', 'Applied Mathematics'],
    activities: ['Mathematics Olympiad', 'Problem Solving Competitions', 'Statistical Workshops', 'Research Seminars', 'Industry Applications', 'Mathematical Modeling Projects']
  },
  {
    name: 'Botany',
    description: 'Plant sciences and biodiversity',
    staff: 4,
    courses: ['B.Sc Botany', 'M.Sc Botany'],
    color: '#059669',
    about: 'The Botany Department studies plant sciences, biodiversity, and environmental conservation. We focus on plant physiology, taxonomy, and ecological studies.',
    staffMembers: [
      'Dr. Kavita Sharma - Head of Department',
      'Prof. Rajesh Patel - Plant Physiology',
      'Dr. Sunita Kumar - Plant Taxonomy',
      'Ms. Priya Singh - Ecology'
    ],
    researchAreas: ['Plant Physiology', 'Plant Taxonomy', 'Ecology', 'Biodiversity', 'Environmental Biology', 'Plant Biotechnology'],
    activities: ['Herbarium Collection', 'Field Trips', 'Plant Identification Workshops', 'Environmental Awareness', 'Botanical Gardens Visits', 'Conservation Projects']
  },
  {
    name: 'Zoology',
    description: 'Animal sciences and wildlife studies',
    staff: 4,
    courses: ['B.Sc Zoology', 'M.Sc Zoology'],
    color: '#dc2626',
    about: 'The Zoology Department explores animal sciences, wildlife biology, and conservation. Our studies include animal physiology, behavior, and biodiversity conservation.',
    staffMembers: [
      'Dr. Amit Kumar - Head of Department',
      'Prof. Priya Sharma - Animal Physiology',
      'Dr. Rajesh Patel - Wildlife Biology',
      'Ms. Sunita Singh - Entomology'
    ],
    researchAreas: ['Animal Physiology', 'Wildlife Biology', 'Entomology', 'Conservation Biology', 'Animal Behavior', 'Marine Biology'],
    activities: ['Wildlife Photography', 'Field Studies', 'Animal Behavior Observations', 'Conservation Awareness', 'Museum Visits', 'Wildlife Documentary Screenings']
  },
  {
    name: 'Economics',
    description: 'Economic theory and policy analysis',
    staff: 6,
    courses: ['B.A Economics', 'M.A Economics'],
    color: '#7c3aed',
    about: 'The Economics Department provides comprehensive understanding of economic theories, policies, and their applications in real-world scenarios.',
    staffMembers: [
      'Dr. Rajesh Kumar - Head of Department',
      'Prof. Sunita Patel - Microeconomics',
      'Dr. Amit Sharma - Macroeconomics',
      'Prof. Priya Verma - Development Economics',
      'Dr. Meera Singh - International Economics',
      'Mr. Arun Kumar - Econometrics'
    ],
    researchAreas: ['Microeconomics', 'Macroeconomics', 'Development Economics', 'International Economics', 'Econometrics', 'Public Policy'],
    activities: ['Economic Debates', 'Policy Analysis Workshops', 'Data Analysis Projects', 'Industry Visits', 'Economic Conferences', 'Research Publications']
  },
  {
    name: 'Political Science',
    description: 'Political systems and governance',
    staff: 5,
    courses: ['B.A Political Science', 'M.A Political Science'],
    color: '#1e40af',
    about: 'The Political Science Department studies political systems, governance, and international relations. We analyze political theories and contemporary political issues.',
    staffMembers: [
      'Dr. Suresh Kumar - Head of Department',
      'Prof. Anita Patel - Political Theory',
      'Dr. Rajesh Sharma - International Relations',
      'Prof. Sunita Verma - Indian Politics',
      'Mr. Amit Singh - Public Administration'
    ],
    researchAreas: ['Political Theory', 'International Relations', 'Indian Politics', 'Public Administration', 'Comparative Politics', 'Political Philosophy'],
    activities: ['Political Debates', 'Model United Nations', 'Policy Analysis', 'Government Visits', 'International Relations Seminars', 'Research Projects']
  },
  {
    name: 'History',
    description: 'Historical research and cultural studies',
    staff: 4,
    courses: ['B.A History', 'M.A History'],
    color: '#d97706',
    about: 'The History Department explores historical events, cultural heritage, and their impact on contemporary society. We study ancient, medieval, and modern history.',
    staffMembers: [
      'Dr. Meenakshi Kumar - Head of Department',
      'Prof. Rajesh Patel - Ancient History',
      'Dr. Sunita Sharma - Medieval History',
      'Mr. Amit Verma - Modern History'
    ],
    researchAreas: ['Ancient History', 'Medieval History', 'Modern History', 'Cultural Studies', 'Archaeology', 'Historical Research'],
    activities: ['Historical Tours', 'Archaeological Visits', 'Cultural Exhibitions', 'Documentary Screenings', 'Research Seminars', 'Heritage Walks']
  },
  {
    name: 'English',
    description: 'Literature and language studies',
    staff: 6,
    courses: ['B.A English', 'M.A English'],
    color: '#0891b2',
    about: 'The English Department focuses on literature, language studies, and communication skills. We explore various literary periods and contemporary literature.',
    staffMembers: [
      'Dr. Priya Sharma - Head of Department',
      'Prof. Rajesh Kumar - British Literature',
      'Dr. Sunita Patel - American Literature',
      'Prof. Amit Verma - Indian Writing in English',
      'Ms. Meera Singh - Linguistics',
      'Mr. Arun Kumar - Communication Skills'
    ],
    researchAreas: ['British Literature', 'American Literature', 'Indian Writing in English', 'Linguistics', 'Creative Writing', 'Literary Criticism'],
    activities: ['Literary Festivals', 'Creative Writing Workshops', 'Drama Productions', 'Poetry Recitations', 'Book Reviews', 'Language Labs']
  },
  {
    name: 'Hindi',
    description: 'Hindi literature and language',
    staff: 4,
    courses: ['B.A Hindi', 'M.A Hindi'],
    color: '#059669',
    about: 'The Hindi Department promotes Hindi literature, language, and cultural heritage. We study classical and modern Hindi literature.',
    staffMembers: [
      'Dr. Rajesh Kumar - Head of Department',
      'Prof. Sunita Patel - Classical Hindi',
      'Dr. Amit Sharma - Modern Hindi Literature',
      'Ms. Priya Singh - Hindi Grammar'
    ],
    researchAreas: ['Classical Hindi Literature', 'Modern Hindi Literature', 'Hindi Grammar', 'Hindi Journalism', 'Translation Studies', 'Folk Literature'],
    activities: ['Hindi Diwas Celebrations', 'Poetry Recitations', 'Literary Seminars', 'Cultural Programs', 'Translation Workshops', 'Folk Literature Studies']
  },
  {
    name: 'Commerce',
    description: 'Business and commercial studies',
    staff: 8,
    courses: ['B.Com', 'M.Com', 'BBA'],
    color: '#7c2d12',
    about: 'The Commerce Department provides comprehensive business education covering accounting, finance, marketing, and business management.',
    staffMembers: [
      'Dr. Suresh Kumar - Head of Department',
      'Prof. Anita Patel - Accounting',
      'Dr. Rajesh Sharma - Finance',
      'Prof. Sunita Verma - Marketing',
      'Dr. Amit Singh - Business Management',
      'Ms. Priya Kumar - Economics',
      'Mr. Arun Patel - Statistics',
      'Ms. Meera Singh - Business Law'
    ],
    researchAreas: ['Accounting', 'Finance', 'Marketing', 'Business Management', 'Economics', 'Business Law'],
    activities: ['Business Plan Competitions', 'Industry Visits', 'Accounting Workshops', 'Marketing Projects', 'Finance Seminars', 'Entrepreneurship Programs']
  },
  {
    name: 'Geography',
    description: 'Earth sciences and spatial analysis',
    staff: 4,
    courses: ['B.A Geography', 'M.A Geography'],
    color: '#059669',
    about: 'The Geography Department studies physical and human geography, environmental issues, and spatial analysis using modern technologies.',
    staffMembers: [
      'Dr. Amit Kumar - Head of Department',
      'Prof. Priya Sharma - Physical Geography',
      'Dr. Rajesh Patel - Human Geography',
      'Ms. Sunita Singh - GIS & Remote Sensing'
    ],
    researchAreas: ['Physical Geography', 'Human Geography', 'GIS & Remote Sensing', 'Environmental Geography', 'Urban Geography', 'Regional Planning'],
    activities: ['Field Trips', 'GIS Workshops', 'Environmental Surveys', 'Map Reading Sessions', 'Climate Studies', 'Urban Planning Projects']
  },
  {
    name: 'Sociology',
    description: 'Social structures and human behavior',
    staff: 3,
    courses: ['B.A Sociology', 'M.A Sociology'],
    color: '#7c3aed',
    about: 'The Sociology Department examines social structures, human behavior, and social issues. We analyze contemporary social problems and their solutions.',
    staffMembers: [
      'Dr. Sunita Kumar - Head of Department',
      'Prof. Rajesh Patel - Social Theory',
      'Ms. Priya Sharma - Social Research'
    ],
    researchAreas: ['Social Theory', 'Social Research', 'Rural Sociology', 'Urban Sociology', 'Gender Studies', 'Social Development'],
    activities: ['Social Surveys', 'Community Studies', 'Gender Awareness Programs', 'Social Research Projects', 'Field Work', 'Social Development Workshops']
  },
  {
    name: 'Psychology',
    description: 'Human mind and behavior studies',
    staff: 4,
    courses: ['B.A Psychology', 'M.A Psychology'],
    color: '#dc2626',
    about: 'The Psychology Department explores human behavior, mental processes, and psychological well-being. We study various aspects of human psychology.',
    staffMembers: [
      'Dr. Priya Kumar - Head of Department',
      'Prof. Amit Sharma - Clinical Psychology',
      'Dr. Sunita Patel - Social Psychology',
      'Ms. Rajesh Singh - Counseling Psychology'
    ],
    researchAreas: ['Clinical Psychology', 'Social Psychology', 'Counseling Psychology', 'Cognitive Psychology', 'Developmental Psychology', 'Industrial Psychology'],
    activities: ['Psychological Testing', 'Counseling Sessions', 'Mental Health Awareness', 'Behavioral Studies', 'Psychology Workshops', 'Research Projects']
  },
  {
    name: 'Philosophy',
    description: 'Critical thinking and ethical studies',
    staff: 3,
    courses: ['B.A Philosophy', 'M.A Philosophy'],
    color: '#1e293b',
    about: 'The Philosophy Department promotes critical thinking, ethical reasoning, and philosophical inquiry. We explore various philosophical traditions and contemporary issues.',
    staffMembers: [
      'Dr. Rajesh Kumar - Head of Department',
      'Prof. Sunita Patel - Indian Philosophy',
      'Mr. Amit Sharma - Western Philosophy'
    ],
    researchAreas: ['Indian Philosophy', 'Western Philosophy', 'Ethics', 'Logic', 'Metaphysics', 'Epistemology'],
    activities: ['Philosophical Debates', 'Ethics Workshops', 'Critical Thinking Sessions', 'Philosophical Discussions', 'Ethics Awareness', 'Research Seminars']
  },
  {
    name: 'Education',
    description: 'Teaching and educational sciences',
    staff: 5,
    courses: ['B.Ed', 'M.Ed'],
    color: '#0891b2',
    about: 'The Education Department prepares future educators with pedagogical skills, educational psychology, and modern teaching methodologies.',
    staffMembers: [
      'Dr. Meenakshi Patel - Head of Department',
      'Prof. Rajesh Kumar - Educational Psychology',
      'Dr. Sunita Sharma - Pedagogy',
      'Prof. Amit Verma - Educational Technology',
      'Ms. Priya Singh - Curriculum Development'
    ],
    researchAreas: ['Educational Psychology', 'Pedagogy', 'Educational Technology', 'Curriculum Development', 'Educational Assessment', 'Teacher Training'],
    activities: ['Teaching Practice', 'Educational Workshops', 'Technology Integration', 'Assessment Training', 'School Visits', 'Educational Research']
  },
  {
    name: 'Physical Education',
    description: 'Sports science and fitness studies',
    staff: 4,
    courses: ['B.P.Ed', 'M.P.Ed'],
    color: '#059669',
    about: 'The Physical Education Department promotes sports science, fitness, and physical well-being. We focus on sports training and physical fitness.',
    staffMembers: [
      'Dr. Amit Kumar - Head of Department',
      'Prof. Rajesh Sharma - Sports Training',
      'Dr. Sunita Patel - Sports Psychology',
      'Ms. Priya Singh - Fitness Training'
    ],
    researchAreas: ['Sports Training', 'Sports Psychology', 'Fitness Training', 'Sports Medicine', 'Physical Education', 'Sports Management'],
    activities: ['Sports Tournaments', 'Fitness Camps', 'Sports Psychology Workshops', 'Athletic Training', 'Health Awareness', 'Sports Competitions']
  }
];

const departmentOptions = [
  { name: 'About Department', icon: '📚' },
  { name: 'Staff Members', icon: '👨‍🏫' },
  { name: 'Courses Offered', icon: '📖' },
  { name: 'Research Areas', icon: '🔬' },
  { name: 'Department Activities', icon: '🎯' },
  { name: 'Contact Info', icon: '📞' }
];

function Departments() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOptionClick = (dept, option) => {
    setSelectedDept(dept);
    setSelectedOption(option);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDept(null);
    setSelectedOption(null);
  };

  const renderModalContent = () => {
    if (!selectedDept || !selectedOption) return null;

    switch (selectedOption.name) {
      case 'About Department':
        return (
          <div>
            <h5 className="fw-bold text-primary mb-3">About {selectedDept.name} Department</h5>
            <p className="text-muted">{selectedDept.about}</p>
            <div className="mt-3">
              <Badge bg="primary" className="me-2">{selectedDept.staff} Staff Members</Badge>
              <Badge bg="success" className="me-2">{selectedDept.courses.length} Courses</Badge>
            </div>
          </div>
        );

      case 'Staff Members':
        return (
          <div>
            <h5 className="fw-bold text-primary mb-3">Faculty Members - {selectedDept.name}</h5>
            <ul className="list-unstyled">
              {selectedDept.staffMembers.map((member, index) => (
                <li key={index} className="mb-2 p-2 bg-light rounded">
                  <i className="fas fa-user-tie me-2 text-primary"></i>
                  {member}
                </li>
              ))}
            </ul>
          </div>
        );

      case 'Courses Offered':
        return (
          <div>
            <h5 className="fw-bold text-primary mb-3">Available Courses - {selectedDept.name}</h5>
            <div className="row">
              {selectedDept.courses.map((course, index) => (
                <div key={index} className="col-md-6 mb-3">
                  <div className="card border-0 bg-light">
                    <div className="card-body text-center">
                      <h6 className="fw-semibold">{course}</h6>
                      <small className="text-muted">Duration: 3 Years</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Research Areas':
        return (
          <div>
            <h5 className="fw-bold text-primary mb-3">Research Areas - {selectedDept.name}</h5>
            <div className="row">
              {selectedDept.researchAreas.map((area, index) => (
                <div key={index} className="col-md-6 mb-2">
                  <Badge bg="info" className="w-100 p-2 text-start">
                    <i className="fas fa-microscope me-2"></i>
                    {area}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Department Activities':
        return (
          <div>
            <h5 className="fw-bold text-primary mb-3">Department Activities - {selectedDept.name}</h5>
            <div className="row">
              {selectedDept.activities.map((activity, index) => (
                <div key={index} className="col-md-6 mb-2">
                  <div className="d-flex align-items-center p-2 bg-light rounded">
                    <i className="fas fa-calendar-alt text-primary me-2"></i>
                    <span>{activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'Contact Info':
        return (
          <div>
            <h5 className="fw-bold text-primary mb-3">Contact Information - {selectedDept.name}</h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card border-0 bg-light">
                  <div className="card-body">
                    <h6 className="fw-semibold">Department Head</h6>
                    <p className="mb-1">{selectedDept.staffMembers[0]}</p>
                    <small className="text-muted">Email: head.{selectedDept.name.toLowerCase().replace(' ', '')}@college.edu</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card border-0 bg-light">
                  <div className="card-body">
                    <h6 className="fw-semibold">Office Location</h6>
                    <p className="mb-1">Block A, Room {Math.floor(Math.random() * 20) + 1}</p>
                    <small className="text-muted">Phone: +91-98765-{Math.floor(Math.random() * 90000) + 10000}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Container className="py-5 mt-5">
      <h1 className="text-center mb-5 display-4 fw-bold text-primary">College Departments</h1>
      <p className="text-center text-muted mb-5 lead">
        Explore our diverse academic departments offering quality education and research opportunities
      </p>
      
      <Row>
        {departments.map((dept, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card 
              className="dept-card shadow-lg rounded-4 border-0 animate__animated animate__fadeInUp"
              data-dept={dept.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <Card.Title className="fw-semibold text-dark mb-2">
                      {dept.name}
                    </Card.Title>
                    <p className="text-muted small mb-2">{dept.description}</p>
                    <div className="d-flex gap-2 mb-3">
                      <Badge bg="primary" className="px-2 py-1">
                        {dept.staff} Staff
                      </Badge>
                      <Badge bg="success" className="px-2 py-1">
                        {dept.courses.length} Courses
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => toggleCard(index)}
                    aria-controls={`collapse-${index}`}
                    aria-expanded={openIndex === index}
                    className="explore-btn rounded-pill px-3 py-1"
                  >
                    {openIndex === index ? 'Hide' : 'Explore'}
                  </Button>
                </div>
                
                <Collapse in={openIndex === index}>
                  <div id={`collapse-${index}`} className="mt-3 animate__animated animate__fadeIn">
                    <div className="mb-3">
                      <h6 className="fw-semibold text-primary mb-2">Available Courses:</h6>
                      <div className="d-flex flex-wrap gap-1">
                        {dept.courses.map((course, idx) => (
                          <Badge key={idx} bg="light" text="dark" className="px-2 py-1">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <ul className="list-group list-group-flush">
                      {departmentOptions.map((opt, idx) => (
                        <li
                          key={idx}
                          className="list-group-item bg-transparent border-0 py-2 px-0 hover-list-item"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleOptionClick(dept, opt)}
                        >
                          <div className="text-decoration-none text-dark-emphasis fw-medium transition-hover d-flex align-items-center">
                            <span className="me-2">{opt.icon}</span>
                            {opt.name}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <Row className="mt-5">
        <Col md={12}>
          <Card className="border-0 shadow-lg rounded-4 bg-gradient-primary text-white">
            <Card.Body className="p-4 text-center">
              <h3 className="fw-bold mb-3">Interested in a Department?</h3>
              <p className="mb-4">
                Contact our academic office for detailed information about admission procedures, 
                course structures, and department-specific requirements.
              </p>
              <Button variant="light" size="lg" className="fw-semibold">
                Contact Academic Office
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for Department Information */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-primary">
            {selectedOption?.name} - {selectedDept?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderModalContent()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Departments;
