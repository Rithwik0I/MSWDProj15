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
import 'C:/KLU/Y23-24/Mern/New folder/src/App.css';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';



//API_URL="https://localhost:8081/"

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Signup() {

  const history = useNavigate();
  
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [uname, setUname] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [passport, setPassport] = useState()
  const [password2, setPassword2] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(password !== password2)
    {
      alert("Passwords do not match.")
    }
    else
    {
      axios.get('http://localhost:8081/sign', {fname: fname, lname: lname, uname: uname, email: email, phone: phone, passport: passport, password: password})
      .then( response => {
        console.log(response.data)
      })
      .catch(err=>{console.log(err)})
      history('/login');
    }
    

  };

  return (
  <div style={{width:'100%', height:'100%', backgroundImage: 'url("https://i.pinimg.com/originals/cc/a5/02/cca5022c86f67861746d7cf2eb486de8.gif")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

    <ThemeProvider theme={defaultTheme}  >
      
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        
          sx={{
            margin: -5,
            marginTop: 10,
            marginBottom:5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            padding: '1.5rem',
            opacity: '75%',
            backgroundColor: 'white',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={1} >
              <Grid item xs={12} sm={6}>
                <TextField
                margin='normal'
                required
                id='fname'
                label='First Name'
                name='fname'
                value = {fname}
                onChange={(e) => setFname(e.target.value)}
                />
                </Grid>
              <Grid item xs={12} sm={6}>
            <TextField
              margin='normal'
              id="lname"
              label="Last Name"
              name='lname'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
                </Grid>
              <Grid item xs={12}>
              <TextField
                margin='normal'
                fullWidth
                id='uname'
                label='Username'
                name='uname'
                value={uname}
                onChange={(e) => setUname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
                autoFocus
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="passport"
                label="Passport Number"
                name="passport"
                autoFocus
                value={passport}
                onChange={(e) => setPassport(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
                </Grid>

            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
              id="SignBox"
              >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  Have an Account?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      
      <p></p>
      <p></p>
    </ThemeProvider>
    </div>
    
  );
}