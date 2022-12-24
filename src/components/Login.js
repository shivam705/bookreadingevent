import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
      };
    const handlePassword = (e) => {
        setPassword(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
          setError(true);
        } else {
          setSubmitted(true);
          setError(false);
        }
      };


  return (
          
        <div style={{backgroundColor: "lightblue", textAlign:"center",width:"100%",height:"36em"}}>
            <div>
            <Form >
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                     </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="email" placeholder="Email" onChange={handleEmail} value={email}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="password" placeholder="Password" onChange={handlePassword} value={password}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={7}>
                    <Button type="submit" onClick={handleSubmit} variant="outline-primary">Sign in</Button>
                    <Link to="/register"><Button variant="outline-primary" style={{marginLeft:"17px"}}>Register</Button></Link>
                    </Col>
                </Form.Group>

            </Form>
            </div>
        </div>
        
  );
};