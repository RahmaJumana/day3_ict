import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const StateBasics = () => {
    var [name, setname] = useState("")
    var [val, setvalue] = useState()
    const setval = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
    const setval2 = () => {
        setvalue(name)
    }
  return (
      <div>
          <br/><br/>
          <Typography variant='h3'>Welcome {val}</Typography>
          <TextField variant='outlined' onChange={setval}/>
          <Button variant='contained' color='success' onClick={setval2}>Submit</Button>
    </div>
  )
}

export default StateBasics
