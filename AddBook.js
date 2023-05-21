import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import React, { useState } from 'react'
import "./css/form.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {

  // Use the useHistory hook to get access to the history object for navigation
  const history = useNavigate();

  // Set up state variables for form inputs and checkbox value
  const [inputs, setInputs] = useState({
    name:'',
    description:'',
    author:'',
    noofbooks:'',
    image:''
  });
  const [checked, setChecked] = useState(false)

  // Handle form input changes
  const handleChange = (e) => {
      setInputs((prevState)=>({
          ...prevState,
          [e.target.name]: e.target.value,
      }));
  };

    
  // handle validation part in Form description field  
  const handleBlur = (event) => {
    const words = event.target.value.split(" ");
    if (words.length > 20 && words.length > 5) {
      event.target.setCustomValidity("Input should be less than 20 words");
    } else {
      event.target.setCustomValidity("");
    }
  };


  // Send POST request to add new book to database
  const sendRequest = async() =>{
    await axios.post("http://localhost:3000/books", {
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      noofbooks:Number(inputs.noofbooks),
      image:String(inputs.image),
      available:Boolean(checked),
    }).then(res => res.data);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history('/books'))
  };

  // Render the form
  return ( 
    <div>
      {inputs && <form onSubmit={handleSubmit}>
        <Box 
          className="form"
          display="flex" 
          flexDirection="column" 
          justifyContent={'center'} 
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto">
          
          <FormLabel>Name</FormLabel>
          <TextField 
            value={inputs.name}
            onChange={handleChange}
            margin="normal"   
            fullWidth variant="outlined" 
            name="name"
          />
          
          <FormLabel>Author</FormLabel>
          <TextField 
            value={inputs.author}
            onChange={handleChange}
            margin="normal" 
            fullWidth variant="outlined" 
            name="author"
          />
          
          <FormLabel>Description</FormLabel>
          <TextField
        value={inputs.description}
        onChange={handleChange}
        onBlur={handleBlur}     
        margin="normal"
        fullWidth
        variant="outlined"
        name="description"
      />

          <FormLabel>No of Books</FormLabel>
          <TextField 
            value={inputs.noofbooks}
            onChange={handleChange}
            type='number'
            margin="normal" 
            fullWidth variant="outlined" 
            name="noofbooks"
          />
          
          <FormLabel>Image Link</FormLabel>
          <TextField 
            value={inputs.image}
            onChange={handleChange}
            margin="normal" 
            fullWidth variant="outlined" 
            name="image"
          />
          
          <FormControlLabel 
            control={<Checkbox checked={checked} onChange={()=> setChecked(!checked)}/>} 
            label="Available" 
          />
          
          <Button variant='contained' type='submit'>Add Book</Button>
          
        </Box>
      </form>}
    </div>
  );
};

export default AddBook;