import React, { useState } from 'react';
import './App.css'

function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isFriendly, setIsFriendly] = useState(false);
  const [employmentStatus, setEmploymentStatus] = useState('unemployed');
  const [selectedColor, setSelectedColor] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // You can handle the form submission here, e.g., send data to a server

    console.log('Submitted Data:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Comment:', comment);
    console.log('Are you friendly:', isFriendly);
    console.log('Employment Status:', employmentStatus);
    console.log('Selected Color:', selectedColor);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div>
        <label>
          Are you friendly?
          <input
            type="checkbox"
            checked={isFriendly}
            onChange={(e) => setIsFriendly(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="employmentStatus">Employment Status:</label>
        <select
          id="employmentStatus"
          value={employmentStatus}
          onChange={(e) => setEmploymentStatus(e.target.value)}
        >
          <option value="unemployed">Unemployed</option>
          <option value="employed">Employed</option>
          <option value="self-employed">Self-Employed</option>
        </select>
      </div>
      <div>
        <label htmlFor="selectedColor">Choose a Color:</label>
        <input
          type="color"
          id="selectedColor"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
