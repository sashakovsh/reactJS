import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/AuthProvider";

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const auth = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let from = location.state?.from?.pathname ||  '/';

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await auth.signin({ email, password }, () => {
                setTimeout( () => navigate(from, {replace: true}), 2000)
            })
        } catch (error) {
            setError(error);
        }
    }

    if(auth.user) {
        return <Alert style={{justifyContent: 'center'}} severity="success">Вы уже вошли, в общем-то</Alert>
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Typography paddingTop='20px'>Для доступа к функциям необхдимо войти в систему</Typography>
                <Box 
                    display="flex" 
                    flexDirection="column"
                    alignItems="center"
                    paddingTop="40px"
                    gap="20px"
                >
                    <TextField
                        placeholder="Введите почту"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleEmail} 
                        required
                    />
                    <TextField
                        placeholder="Введите пароль"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handlePassword} 
                        required
                    />
                    <Button variant="contained" type="submit">Войти</Button>
                    {error && <Alert severity="error">{error}</Alert>}
                </Box>
            </form>
        </div>
    )
}

export default Login;