import { Container, Paper, Typography } from '@mui/material';
import Axios from 'axios';
import React from 'react'
import { useParams } from 'react-router'
function VerificationPage() {
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  let {token} = useParams();
  
  React.useEffect(()=>{
    verifUser(token)
  },[])

  const verifUser = async (token) =>{
    try {
        let result = await Axios.get(`https://localhost:44365/api/Login/verifuser?token=${token}`)
        console.log('%cVerificationPage.js line:14 result', 'color: #007acc;', result);
        setMessage("Success")
        setLoading(false)
    } catch (error) {
        console.log('%cVerificationPage.js line:16 error', 'color: #007acc;', error);
        setMessage(error?.response?.data)
        setLoading(false)

    }
  }

  if(loading){
    return <Container>Loading</Container>
  }
  return (
    <Container maxWidth="lg">
        <Paper sx={{margin:"20px", padding: "20px"}}>
            <Typography>
                {message}
            </Typography>
        </Paper>
    </Container>
  )
}

export default VerificationPage