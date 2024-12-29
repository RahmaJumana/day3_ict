import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Language = () => {
    var [lang, setlang] = useState("")
    const lang1 = () => {
        setlang("Hindi")
    }
    const lang2 = () => {
        setlang("English")
    }
    const lang3 = () => {
        setlang("Malayalam")
    }
    useEffect(() => {
        lang1()
    },[])

  return (
      <div>
          <br/><br/><br/>
          <Typography variant='h3'>Welcome {lang}</Typography>
          <Button variant='contained' color='success' onClick={lang1} >Hindi</Button>&nbsp;&nbsp;&nbsp;
          <Button variant='contained' color='success' onClick={lang2}>English</Button>&nbsp;&nbsp;&nbsp;
          <Button variant='contained' color='success' onClick={lang3}>Malayalam</Button>

      
    </div>
  )
}

export default Language
