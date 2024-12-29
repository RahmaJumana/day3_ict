import React from 'react'
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

const LibraryTable = () => {
  return (
      <div>
          <br/><br/>
          <TableContainer >
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>BookId</TableCell>
                      <TableCell>BookName</TableCell>
                      <TableCell>Author</TableCell>
                      <TableCell>Genre</TableCell>
                      <TableCell>Price</TableCell>
                  </TableRow>
              </TableHead>
                  <TableBody>
                      <TableRow>
                          <TableCell>R13</TableCell>
                          <TableCell>1984</TableCell>
                          <TableCell>George Orwell</TableCell>
                          <TableCell>Science Fiction</TableCell>
                          <TableCell>$12</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell>R14</TableCell>
                          <TableCell>How to kidnap a child?</TableCell>
                          <TableCell>Fervin Fidha</TableCell>
                          <TableCell>Crime Thriller</TableCell>
                          <TableCell>$100</TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
              </TableContainer>
    </div>
  )
}

export default LibraryTable
