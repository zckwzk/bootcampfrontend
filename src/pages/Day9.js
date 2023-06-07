import React, { useContext } from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  TextField,
  Stack,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { submitLoginAPI } from "../api/user/userAPI";
import { setAuthTokenHeader } from "../api/axios";
import { useNavigate, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Day9() {
  const navigate = useNavigate();
  const [data, setData] = React.useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = React.useState(false);

  const { user, setUser } = useContext(AuthContext);
  console.log("%cDay9.js line:24 user", "color: #007acc;", user);
  if (user) {
    return <Navigate to="/day8" />;
  }

  const submitLogin = async () => {
    try {
      let response = await submitLoginAPI({
        name: data.username,
        password: data.password,
        role: "test",
      });
      console.log(
        "%cDay9.js line:22 response",
        "color: #007acc;",
        response.data
      );
      setAuthTokenHeader(response.data);
      setUser(response.data);
      navigate("/day8");
    } catch (error) {
      console.log("%cDay9.js line:23 error", "color: #007acc;", error);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Container maxWidth="xs" sx={{ padding: 5 }}>
      <Paper sx={{ padding: 3 }}>
        <Stack sx={{ padding: "20px" }} spacing={2}>
          <Typography textAlign={"center"}>Login</Typography>

          <TextField
            id="username"
            label="username"
            variant="standard"
            value={data.username}
            onChange={(e) =>
              setData((prev) => ({
                username: e.target.value,
                password: prev.password,
              }))
            }
          />
          <TextField
            id="password"
            label="password"
            variant="standard"
            value={data.password}
            type="password"
            onChange={(e) =>
              setData((prev) => ({
                password: e.target.value,
                username: prev.username,
              }))
            }
          />

          <Button onClick={() => submitLogin()}>Login</Button>
          <Button>Register</Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Day9;
