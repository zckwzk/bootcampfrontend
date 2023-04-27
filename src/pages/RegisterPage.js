import React from 'react'
import { Container, Typography, Button, Paper, TextField, Stack } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function RegisterPage() {
  const [data, setData] = React.useState({username: "", password: ""});
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Container  maxWidth="xs" sx={{ padding: 5 }}>
        <Paper sx={{padding: 3}}>
            <Stack sx={{ padding: "20px" }} spacing={2}>
                <Typography textAlign={"center"}>Login</Typography>

                <TextField id="username" label="username" variant="standard" value={data.username} onChange={e => setData(prev => ({ username: e.target.value, password: prev.password}))} />
                <TextField  id="password" label="password" variant="standard"  value={data.password}  type='password' onChange={e => setData(prev => ({ password: e.target.value, username: prev.username}))} />

                <Button>Login</Button>
                <Button>Register</Button>
            </Stack>
        </Paper>
    </Container>
  )
}

export default RegisterPage