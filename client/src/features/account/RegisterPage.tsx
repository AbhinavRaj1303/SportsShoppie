import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import { useAppDispatch } from '../../app/store/configureStore';
import { toast } from 'react-toastify';
import { LoadingButton } from '@mui/lab';
import { Box, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { registerUser } from './accountSlice';

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { isSubmitting, errors, isValid } } = useForm({
    mode: 'onTouched'
  });

  async function submitForm(data: FieldValues) {
    try {
      await dispatch(registerUser(data));
      toast.success('Registration successful! Please log in.');
      navigate('/login');  // Redirecting to login page after successful registration
    } catch (error) {
      console.log('Error registering:', error);
      toast.error('Registration failed. Please try again.');
    }
  }

    return (
        <Container component="main" maxWidth="xs">
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
              Register
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={formData.username}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>    
    )
}

// import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button, Grid } from "@mui/material";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
//
// export default function RegisterPage() {
//   const navigate = useNavigate(); // Hook for navigation
//
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });
//
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make the registration API call
//       await agent.Account.register(formData);
//       // Redirect to login page
//       navigate('/login');
//     } catch (error) {
//       console.error("Registration failed: ", error);
//       // Optionally, handle registration errors here
//     }
//   };
//
// //   const handleChange = (e) =>{
// //     const {name, value} = e.target;
// //     setFormData({...formData, [name]: value});
// //   }
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //   }