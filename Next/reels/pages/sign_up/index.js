import React from 'react'
import TextField from "@mui/material/TextField"
import Image from 'next/image'
import logo from '../../assets/instagram.jpeg'


function index() {
  return (
    //   console.log("saket");
    <div className='signup-container'>

        <div className='signup-card'>
            <Image src ={logo}/>

            <TextField
          id="outlined-basic"
          size="small"
          label="Email"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          size="small"
          label="Password"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
        />
        <TextField
          id="outlined-basic"
          size="small"
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="dense"
        />

        </div>


    </div>
  )
}

export default index