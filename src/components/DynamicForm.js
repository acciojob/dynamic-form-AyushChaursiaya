import React, { useState } from 'react';

const DynamicForm = () => {
    const [fields, setFields] = useState([]);

    const handleAdd = () => {
        const newField = {id: Date.now(), value: ''};
        setFields([...fields, newField]);
        // console.log(newField);
        // console.log('field =>', fields);
    }

    const handleRemove = (id) => {
        setFields(fields.filter(field => field.id !== id));
    }

    const handleInput = (id, value) => {
        const updateInput = fields.map((field) => {
            if (field.id === id) {
                return { ...field, value: value };
                }else {
                    return field;
                }
        })
        setFields(updateInput);
    }

    return (<>
    <div>
        {
            fields.map((field) => (
                <div key={field.id}>
                    <input style={{margin: '5px'}} type='text' placeholder='Enter Name' value={fields.value} onClick={(e) => handleInput(field.id , e.target.value)} />
                    <button style={{border: 'none', background: 'blue', color: '#ffffff', borderRadius: '4px', width: '100px', height: '25px'}} onClick={() => handleRemove(field.id)}>Delete</button>
                </div>
            ))
        }
    </div>
    <button style={{border: 'none', background: 'blue', color: '#ffffff', borderRadius: '4px', width: '100px', height: '25px'}} onClick={handleAdd}>Add Field</button>
    </>)
}

export default DynamicForm;