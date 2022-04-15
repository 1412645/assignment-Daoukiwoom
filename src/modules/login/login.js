import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../../assets/icon/logo.png';
import { login } from '../../helpers/apis';
import useAuthen from '../../hooks/useAuthen';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const authen = useAuthen();

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = async () => {
    const payload = {
      username,
      password
    }
    const data = await login(payload);
    if (data.authen) {
      localStorage.setItem('authen', JSON.stringify(data));
      window.location.href = 'http://localhost:3000'
    } else {
      setIsError(true);
    }
  }

  if (authen) {
    window.location.href = 'http://localhost:3000'
  }

  return (
    <ContainerLogin>
      <LogoImg src={logo} alt="logo" />
      <FormWrapper>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
            marginBottom: '20px',
          }}
        >
          <TextField fullWidth label="Username" id="username" type="text" value={username} onChange={onChangeUsername} />
        </Box>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
            marginBottom: '20px',
          }}
        >
          <TextField fullWidth label="Password" id="password" type="password" value={password} onChange={onChangePassword} />
        </Box>
        {isError && <ErrorMessage>Username or password incorrect!!!</ErrorMessage>}
        <Button variant="contained" onClick={handleLogin}>Login</Button>
      </FormWrapper>
    </ContainerLogin>
  )
}

const ContainerLogin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 40px;
`

const LogoImg = styled.img`
  margin-bottom: 30px;
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .MuiFormControl-root {
    .MuiInputBase-root {
      color: black;
    }
  }
`

const  ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 20px;
`

export default Login;