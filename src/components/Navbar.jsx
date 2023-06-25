/* eslint-disable react/prop-types */
import SpaSharpIcon from '@mui/icons-material/SpaSharp';
import { Grid, TextField } from '@mui/material';
import { useState } from 'react';

const Navbar = ({ handleLocationChange }) => {
  const [location, setLocation] = useState("")

  return (
    <div>
      <Grid container className='h-20' >
        <Grid item xs={2}>
          <Grid container justifyContent="flex-start" alignItems="center">
            <Grid item >
              <SpaSharpIcon />
            </Grid>

            <Grid item >
              <h1 className="text-2xl">kkWeather</h1>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs>
          <TextField
          id="standard-basic"
          label="location"
          variant="standard"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            handleLocationChange(e.target.value);
          }} />
        </Grid>

        <Grid item xs={2}>
          change unit
        </Grid>
      </Grid>
    </div>
  )
}

export default Navbar