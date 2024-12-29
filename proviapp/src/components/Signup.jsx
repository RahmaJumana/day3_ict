
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signup = () => {
  return (
      <div>
          <h1>SignUp Page</h1>
          <TextField variant='outlined' label='Username' /><br /><br /><br />
          <TextField variant='outlined' label='Password' /><br /><br /><br />
          <Button variant='contained' color='success'>Submit</Button>
    </div>
  )
}

export default Signup
