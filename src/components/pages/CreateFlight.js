import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function CreateFlight() {
    const hist = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const arriveairport = data.get('arriveairport');
    const depart = data.get('departairport');
    const planecode = data.get('planecode');
    const seats = data.get('seats');
    if(arriveairport != '' && depart != '' && planecode != '' && seats != null){
      axios.post('http://localhost:8081/createflight',{arriveairport,
      depart,
      planecode,
      seats,})
    hist(0)
    }
    else{
      alert('Fill in all the data needed')
    }
    
  };

  return (
    <div style={{width:'100%', height:'100%', backgroundImage:'url("https://i.pinimg.com/originals/c5/c9/07/c5c907b454d8ab45d07a9f016398f27c.gif")', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{backgroundColor:'white', marginBottom:'3.5rem'}} >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Creation of Flights
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="planecode"
              label="Plane Code"
              name="planecode"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="arriveAirport"
              label="Arriving in Airport"
              name="arriveairport"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="departairport"
              label="Departing from Airport"
              name="departairport"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="seats"
              label="Seats"
              type="number"
              id="seats"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Flight
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}