import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material"



function DonateCard() {
  const [donateAdmin, setDonateAdmin] = useState([])

  
  
  useEffect(() => {
    fetch("/donation_forms")
    .then((resp) => resp.json())
    .then(donateAdmin => setDonateAdmin(donateAdmin))
  },[])
  



  return (
    <div>hello!
    <TableContainer component={Paper}>
        <Table aria-lable='donations'>
            <TableHead>
                <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>amount</TableCell>
                    {/* add a date column!!!!! */}
                </TableRow>
            </TableHead>
            <TableBody>
                {donateAdmin.map((row) => (
                    <TableRow 
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.amount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
  }
  
  
  export default DonateCard
