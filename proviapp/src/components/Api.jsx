import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import axios from 'axios'
const Api = () => {
    var [user, setuser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        console.log(response.data)
        setuser(response.data)
    })
  return (
      <div>
          <br/><br/>
          <TableContainer >
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>UserName</TableCell>
                          <TableCell>City</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell>{val.name }</TableCell>
                                  <TableCell>{ val.username}</TableCell>
                                  <TableCell>{val.address.city}</TableCell>
                              </TableRow>  
                          )
           
                      })}
                 </TableBody>
                  </Table>
                  </TableContainer>
    </div>
  )
}

export default Api
