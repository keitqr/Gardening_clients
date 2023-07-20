import React, { useState } from 'react';
import './AddClientForm.css';

const AddClientForm = ({ handleAddClient }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      name,
      phone,
      address
    };
    console.log('Sending client registration request:', newClient); // Add this line for debugging
    fetch('http://localhost:8000/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newClient),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Received server response:', data); // Add this line for debugging
        if (data.success) {
          const { client } = data;
          handleAddClient(client);
          setName('');
          setPhone('');
          setAddress('');
        }
      })
      .catch((error) => {
        console.error('Error registering client:', error);
      });
  };
  

  return (
    <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Register a new client!</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container ic1">
          <input
            id="name"
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="cut"></div>
          <label htmlFor="name" className="placeholder">
            Name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="phone"
            className="input"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="cut"></div>
          <label htmlFor="phone" className="placeholder">
            Phone
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="address"
            className="input"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="cut cut-short"></div>
          <label htmlFor="address" className="placeholder">
            Address
          </label>
        </div>
        <button type="submit" className="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default AddClientForm;
