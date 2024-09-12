import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const location = useLocation();
  const [cif, setCif] = useState('');
  const [bookName, setBookName] = useState('');

  useEffect(() => {
    if (location.state) {
      console.log('Location state:', location.state); 
      setCif(location.state.cif || '');
      setBookName(location.state.bookname || '');
    }
  }, [location]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k4crnkl', 'template_6eipt4b', form.current, 'Y4MSIZ_pljuKWclo3')
      .then(
        () => {
          toast.success('Your data has been sent successfully!', {
            position: 'top-center',
          });
        },
        (error) => {
          toast.error(`Failed to send data: ${error.text}`, {
            position: 'top-center',
          });
        }
      );
  };

  return (
    <div className="contact-page">
      <ToastContainer className="toastify-container" />
      <div className="container my-5 d-flex justify-content-center">
        <Form ref={form} onSubmit={sendEmail} id="contact-form">
          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Form.Label className="form-label">First Name</Form.Label>
              <Form.Control
                className="form-control"
                placeholder="Enter your first name"
                name="name"
                required
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">CIF Number</Form.Label>
            <Form.Control
              className="form-control"
              type="number"
              placeholder="Enter CIF Number"
              name="cif"
              value={cif}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">Mobile No</Form.Label>
            <Form.Control
              className="form-control"
              placeholder="Enter your mobile number"
              name="mobile"
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              {/* Placeholder for additional fields if needed */}
            </Col>
            <Col sm={12} md={6}>
              <Form.Label className="form-label">Book Name</Form.Label>
              <Form.Control
                className="form-control"
                placeholder="Enter the book name"
                name="bookname"
                value={bookName}
                readOnly
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">Your Message</Form.Label>
            <Form.Control
              className="form-control"
              as="textarea"
              rows={3}
              name="message"
              required
            />
          </Form.Group>

          <Button variant="danger" className="btn-lg" type="submit">
            Book
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
