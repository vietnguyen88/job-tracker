import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';


const Login = () => {

  return (
    
    <Container maxWidth="xs" sx={{padding:'20px'}}>
          <Typography variant="h2" sx={{ backgroundImage: 'linear-gradient(22deg, #6811e2 20%, #16bceb 60%)', backgroundClip:'text', color:'transparent', fontWeight:'bold', marginBottom:'10px'}} >
            Builder
          </Typography>
      <Box sx={{ boxShadow: '0px 0px 5px grey', borderRadius: '5px', padding: '30px' }}>
        <Stack spacing={2}>
          <Typography variant="h6" >
            Login using Phone number
          </Typography>
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
          <Button variant="contained">Sign in</Button>
        </Stack>
        <Divider sx={{ py: 2 }}>OR</Divider>
        <Stack direction='row' spacing={2} justifyContent="center">
          <Box component='div' onClick={() => console.log('clicked')}>
            <GoogleIcon sx={{ cursor: 'pointer', '&:hover': { color: 'success.dark' } }} />
          </Box>
          <FacebookIcon sx={{ cursor: 'pointer', '&:hover': { color: 'info.dark' } }} />
        </Stack>
      </Box>
    </Container>
    
  )
}

export default Login