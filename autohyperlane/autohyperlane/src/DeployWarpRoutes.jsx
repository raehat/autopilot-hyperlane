import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './index.css';

function DeployHW() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    chain1name: '',
    tokenType: '', // Changed from chain1type
    tokenAddress: '', // Changed from chain1address
    chain2name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const requestBody = {
      chain1name: formData.chain1name,
      tokenType: formData.tokenType, // Changed from chain1type
      tokenAddress: formData.tokenAddress, // Changed from chain1address
      chain2name: formData.chain2name,
    };

    // POST the JSON body to localhost:3001/deploy-hyperlane
    fetch('http://localhost:3001/deploy-warp-routes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from server:', data);
        // You can handle the server response here
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any errors here
      });

      

    navigate('/deploywebappforroute');
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Card style={{ color: 'white', background: 'black', width: '100%', margin: '30px' }}>
          <Card.Body style={{ color: 'white' }}>
            <Form>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Chain 1 name</Form.Label>
                <Form.Control
                  type="text"
                  name="chain1name"
                  placeholder="Chain 1 name"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Token Type</Form.Label> {/* Changed from "Chain 1 type" */}
                <Form.Control
                  type="text"
                  name="tokenType"
                  placeholder="Token Type" // Changed from "Chain 1 type"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Token Address</Form.Label> {/* Changed from "Chain 1 address" */}
                <Form.Control
                  type="text"
                  name="tokenAddress"
                  placeholder="Token Address" // Changed from "Chain 1 address"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        <Card style={{ color: 'white', background: 'black', width: '100%', margin: '30px' }}>
          <Card.Body>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Chain 2 name</Form.Label>
              <Form.Control
                type="text"
                name="chain2name"
                placeholder="Chain 2 name"
                onChange={handleChange}
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </div>

      <div className="text-center">
        <button onClick={handleSubmit} id="btnnext1" type="button" className="btn btn-secondary">
          NEXT
        </button>
      </div>
    </div>
  );
}

export default DeployHW;
