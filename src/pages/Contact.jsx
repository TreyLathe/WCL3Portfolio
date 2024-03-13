import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to handle form submission, like sending data to a server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      alert(`${name.charAt(0).toUpperCase() + name.slice(1)} field is required`);
    }
    if (name === 'email') {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(value)) {
        alert('Please enter a valid email address');
      }
    }
  };

  return (
    <div>
  <div style={{ marginTop: '50px' }}>
    <p><h3>Please contact me for more information!</h3></p>
    <form onSubmit={handleSubmit}>
      <table style={{ marginBottom: '40px' }}>
        <tr>
          <td><label htmlFor="name">Name:</label></td>
          <td><input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                onBlur={handleBlur} 
              /></td>
        </tr>
        <tr>
          <td><label htmlFor="email">Email:</label></td>
          <td><input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                onBlur={handleBlur} 
              /></td>
        </tr>
        <tr>
          <td><label htmlFor="message">Message:</label></td>
          <td><textarea id="message" name="message" rows="4" cols="50"></textarea></td>
        </tr>
      </table>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>
  );
}
