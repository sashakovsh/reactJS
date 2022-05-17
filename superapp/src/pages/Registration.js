import { Alert, Box, Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../services/firebaseCfg";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        try {
            const auth = getAuth(firebase);
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (e) {
            setError(e.message);
        }

    };

    return (
        <form onSubmit={onSubmit}>
            {error && <Alert severity="error">{error}</Alert>}
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
                    required
                    onChange={handleEmailChange}
                    value={email}
                />
                <TextField 
                    placeholder="Введите пароль"
                    name="password"
                    type="password"
                    required
                    onChange={handlePasswordChange}
                    value={password}
                />
                <Button
                    type="submit"
                    variant="contained"
                >
                    Зарегистрироваться
                </Button>
                <p>Уже зарегистрированы? <Link to="/login">Войти</Link></p>
            </Box>
        </form>
    )
};

export default Registration;