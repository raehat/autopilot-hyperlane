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
    chain1id: '',
    chain1RPCURL: '',
    chain1Validator: '',
    privateKey: '',
    chain2name: '',
    chain2id: '',
    chain2RPCURL: '',
    chain2Validator: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const requestBody = {
      chain1name: formData.chain1name,
      chain1id: formData.chain1id,
      chain1RPCURL: formData.chain1RPCURL,
      chain1Validator: formData.chain1Validator,
      privateKey: formData.privateKey,
      chain2name: formData.chain2name,
      chain2id: formData.chain2id,
      chain2RPCURL: formData.chain2RPCURL,
      chain2Validator: formData.chain2Validator,
    };

    // POST the JSON body to localhost:3001/deploy-hyperlane
    fetch('http://localhost:3001/deploy-hyperlane', {
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

      navigate('/deploywarproutes');
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
                <Form.Label>Chain 1 ID</Form.Label>
                <Form.Control
                  type="text"
                  name="chain1id"
                  placeholder="Chain 1 ID"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Chain 1 RPC URL</Form.Label>
                <Form.Control
                  type="text"
                  name="chain1RPCURL"
                  placeholder="Chain 1 RPC URL"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Chain 1 Validator</Form.Label>
                <Form.Control
                  type="text"
                  name="chain1Validator"
                  placeholder="Chain 1 Validator"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Private key of any funded account</Form.Label>
                <div style={{ color: 'GrayText', margin: '10px', marginTop: '3px' }}>
                  Note: Create a new private key and send only enough funds for deployment! Do not use any existing account!
                </div>
                <Form.Control
                  type="text"
                  name="privateKey"
                  placeholder="Private key"
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

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Chain 2 ID</Form.Label>
              <Form.Control
                type="text"
                name="chain2id"
                placeholder="Chain 2 ID"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Chain 2 RPC URL</Form.Label>
              <Form.Control
                type="text"
                name="chain2RPCURL"
                placeholder="Chain 2 RPC URL"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Chain 2 Validator</Form.Label>
              <Form.Control
                type="text"
                name="chain2Validator"
                placeholder="Chain 2 Validator"
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
