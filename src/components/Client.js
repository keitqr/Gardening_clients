import React, { useState } from 'react';

const Client = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phoneNumber, address }),
      });
  
      if (response.ok) {
        const { data } = await response.json();
        // Update the grid with the new data
        // You will implement this in the next step
        console.log('Registered:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={handleNameChange} 
        placeholder="Name" />
      <input
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Phone Number"
      />
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="Address"
      />
      <button type="submit"> Submit </button>
    </form>
  );
};

export default Client;
