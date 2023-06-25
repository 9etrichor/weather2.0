import SpaSharpIcon from '@mui/icons-material/SpaSharp';
import { Grid } from '@mui/material';

const Navbar = () => {
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
          search
        </Grid>

        <Grid item xs={2}>
          change unit
        </Grid>
      </Grid>
    </div>
  )
}

export default Navbar