import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [ name, setName ] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const emailAddress = 'warrenlathe@me.com';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
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
                placeholder='Your Name'
                style={{ marginLeft: '10px' }} 
              /></td>
        </tr>
        <tr>
          <td><label htmlFor="subject">Subject:</label></td>
          <td><input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            // style={{ width: '160%', padding: '10px', marginTop: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            placeholder='Subject'
            style={{ marginLeft: '10px' }} 
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
                placeholder='Your Email Address'
                style={{ marginLeft: '10px' }} 
              /></td>
        </tr>
        <tr>
          <td><label htmlFor="message">Message:</label></td>
          <td><textarea 
            id="message" 
            name="message" 
            placeholder='Your Message'
            style={{ marginLeft: '10px' }} 
            rows="4" 
            cols="50">
            </textarea>
        
            </td>
            
        </tr>
      </table>
      <button type="submit" style={{ color: "white"}}>Submit</button>
    </form>
  </div>
</div>
  );
}
