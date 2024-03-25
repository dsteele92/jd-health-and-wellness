import React, { useState } from 'react';

export const IntakeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    gender: '',
    race: '',
    hasAllergies: false,
    hasChronicConditions: false,
    hasMedications: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Race:
        <input
          type="text"
          name="race"
          value={formData.race}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Do you have any allergies?
        <input
          type="checkbox"
          name="hasAllergies"
          checked={formData.hasAllergies}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Do you have any chronic conditions?
        <input
          type="checkbox"
          name="hasChronicConditions"
          checked={formData.hasChronicConditions}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Are you taking any medications?
        <input
          type="checkbox"
          name="hasMedications"
          checked={formData.hasMedications}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
