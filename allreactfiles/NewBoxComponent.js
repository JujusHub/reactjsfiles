import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: ''
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData({ width: '', height: '', backgroundColor: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">Width:</label>
        <input 
          type="text" 
          name="width" 
          id="width" 
          value={formData.width} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input 
          type="text" 
          name="height" 
          id="height" 
          value={formData.height} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input 
          type="text" 
          name="backgroundColor" 
          id="backgroundColor" 
          value={formData.backgroundColor} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;
