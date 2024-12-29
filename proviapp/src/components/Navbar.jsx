import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
          <AppBar color='inherit'>
              <Toolbar>
                  <Typography variant="h6"><b>Home</b></Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to='/login'>
                      <Button variant="contained" color='success'>Login</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/signup'>
                      <Button variant="contained" color='success'>SignUp</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/librarytable'>
                      <Button variant="contained" color='success'>book Details</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/state'>
                      <Button variant="contained" color='success'>State</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/counter'>
                      <Button variant="contained" color='success'>Counter</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/language'>
                      <Button variant="contained" color='success'>Language</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/api'>
                      <Button variant="contained" color='success'>Api</Button>
                  </Link> &nbsp;&nbsp;&nbsp;
                  <Link to='/product'>
                      <Button variant="contained" color='success'>Product</Button>
                  </Link> 
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar
