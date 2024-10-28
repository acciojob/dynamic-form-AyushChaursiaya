import React, { useState } from 'react';

const DynamicForm = () => {
  // State to hold the form fields
  const [fields, setFields] = useState([]);

  // Function to add a new field
  const addField = () => {
    const newField = { id: Date.now(), value: '' }; // Each field gets a unique ID
    setFields([...fields, newField]);
  };

  // Function to remove a field by its ID
  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  // Function to handle input changes
  const handleInputChange = (id, value) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setFields(updatedFields);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Dynamic Form Builder</h3>
      {fields.length === 0 ? (
        <p>No fields in the form</p>
      ) : (
        <div>
          {fields.map((field) => (
            <div key={field.id} style={{ marginBottom: '10px' }}>
              <input
                type="text"
                placeholder="Enter text"
                value={field.value}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                style={{ marginRight: '10px', padding: '5px' }}
              />
              <button onClick={() => removeField(field.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <button onClick={addField} style={{ marginTop: '10px', padding: '8px' }}>
        Add Field
      </button>
    </div>
  );
};

export default DynamicForm;
