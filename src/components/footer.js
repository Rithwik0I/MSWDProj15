import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Paper, styled } from '@mui/material';
import { color } from '@mui/system';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '10vh',
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 5,
            mt: 'auto',
            color: 'white',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark'
                ? theme.palette.grey[600]
                : theme.palette.grey[200],
          }}
        >
            <Grid container spacing={3}>

              <Grid xs={3}>
              <Link href='https://linkedin.com/in/rithwik-404-iguana'>
                <Item>
                    <LinkedInIcon fontSize='large' sx={{color:'blue'}}/>      
                </Item>
                </Link>
              </Grid>
              <Grid xs={3}>
              <Link href='https://github.com/Rithwik0I'>
                <Item  >
                    <GitHubIcon fontSize='large' sx={{color:'blue'}}/>
                </Item>
                </Link>
              </Grid>
              <Grid xs={3}>
                <h2 style={{color:'black'}}>Contact Us</h2>
              </Grid>
              <Grid xs={3}>
                <p style={{color:'black'}}>Call us at +91 91211 59373 or shoot an email at 
                
                rithwiksettipalli@mail.com</p>
                
              </Grid>
           </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}