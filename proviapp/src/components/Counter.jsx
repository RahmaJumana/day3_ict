import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Counter = () => {
    var [count, setcount] = useState(0)
    const setcount1 = () => {
        setcount(count+1)
    }
    const setcount2 = () => {
        setcount(count-1)
    }
  return (
      <div>
          <br /><br />
          <h1>Counter</h1>
          <Typography variant='h3'>{count} </Typography>
          <Button variant='contained' color='success' onClick={setcount1}>+</Button>&nbsp;&nbsp;&nbsp;
          <Button variant='contained' color='success' onClick={setcount2}>-</Button>
    </div>
  )
}

export default Counter

