import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../Style/Publication.css';

function Publication() {
  const staffData = [
    {
      title: "List of Non-Teaching Staff Members & DOJ",
      rows: [
        ["John Doe", "Lab Technician", "Physics", "(123) 456-7890"],
        ["Jane Smith", "Administrative Assistant", "Administration", "(987) 654-3210"],
        ["Emily Johnson", "Library Assistant", "Library", "(555) 123-4567"]
      ]
    },
    {
      title: "College Post",
      rows: [
        ["John Doe", "Lab Technician", "Physics", "(123) 456-7890"],
        ["Jane Smith", "Administrative Assistant", "Administration", "(987) 654-3210"],
        ["Emily Johnson", "Library Assistant", "Library", "(555) 123-4567"]
      ]
    },
    {
      title: "Higher Secondary",
      rows: [
        ["John Doe", "Lab Technician", "Physics", "(123) 456-7890"],
        ["Jane Smith", "Administrative Assistant", "Administration", "(987) 654-3210"],
        ["Emily Johnson", "Library Assistant", "Library", "(555) 123-4567"]
      ]
    },
    {
      title: "New Employee Details",
      rows: [
        ["John Doe", "Lab Technician", "Physics", "(123) 456-7890"],
        ["Jane Smith", "Administrative Assistant", "Administration", "(987) 654-3210"],
        ["Emily Johnson", "Library Assistant", "Library", "(555) 123-4567"]
      ]
    }
  ];

  return (
    <div className="supporting-staff-bg py-5 animate-bg mt-5">
      <Container>
        {staffData.map((section, index) => (
          <Card key={index} className="mb-5 glass-card enhanced-card hover-glow fade-in scale-up">
            <Card.Body>
              <h2 className="text-center mb-4 text-primary fw-bold slide-down-fade subtle-glow-light">{section.title}</h2>
              <div className="table-responsive">
                <table className="styled-table w-100">
                  <thead>
                    <tr>
                      <th>Staff Name</th>
                      <th>Designation</th>
                      <th>Department</th>
                      <th>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, idx) => (
                      <tr key={idx} className="row-animate">
                        {row.map((col, i) => (
                          <td key={i}>{col}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default Publication;
