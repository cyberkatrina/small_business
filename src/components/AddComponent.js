import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

const Add = ({ businesses, addItem }) => {
  const [state, setState] = useState({
    id: null,
    name: '',
    description: '',
    hours: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const add = (e) => {
    e.preventDefault();

    // Simple validation
    if (!state.name || !state.description || !state.hours || !state.address) {
      alert("Please fill out all fields.");
      return;
    }

    // Generate a new ID safely
    const newId = businesses.length > 0 ? businesses[businesses.length - 1].id + 1 : 1;

    const newItem = { ...state, id: newId };
    addItem(newItem);

    // Reset state
    setState({
      id: null,
      name: '',
      description: '',
      hours: '',
      address: ''
    });
    alert("Business successfully added to Listings");
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h5" gutterBottom>
        Add a Business
      </Typography>
      <form onSubmit={add}>
        <TextField 
          fullWidth 
          margin="normal" 
          variant="standard" 
          placeholder='Name' 
          name='name' 
          value={state.name} 
          onChange={handleChange} 
        />
        <TextField 
          fullWidth 
          margin="normal" 
          variant="standard"  
          placeholder='Description' 
          name='description' 
          value={state.description} 
          onChange={handleChange} 
        />
        <TextField 
          fullWidth 
          margin="normal" 
          variant="standard"  
          placeholder='Hours' 
          name='hours' 
          value={state.hours} 
          onChange={handleChange} 
        />
        <TextField 
          fullWidth 
          margin="normal" 
          variant="standard"  
          placeholder='Address' 
          name='address' 
          value={state.address} 
          onChange={handleChange} 
        />
        <Button 
          type='submit' 
          variant="standard" 
          style={{backgroundColor: '#3E51B5', color: 'white', marginTop: '10px'}}
          fullWidth
        >
          SAVE
        </Button>
      </form>
    </Container>
  );
};

export default Add;
