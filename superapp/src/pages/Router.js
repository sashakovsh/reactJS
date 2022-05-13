import React, { useState } from 'react';
import { Route, Routes, Link as RouterLink } from 'react-router-dom';
import Chats from './Chats';
import Profile from './Profile';
import { Box, Tab, Tabs } from '@mui/material';
import Home from './Home';
import CatsFacts from './CatsFacts';
import Login from './Login';
import Registration from './Registration';
import RequireAuth from '../hocs/RequireAuth';

export default function Router() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
    <div>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'center' }}>
                <Tabs 
                    value={value} 
                    onChange={handleChange}
                    centered={true}
                    aria-label="basic tabs example">
                    <Tab label="Главная" component={RouterLink} to='/'/>
                    <Tab label="Список чатов" component={RouterLink} to='/chats'/>
                    <Tab label="Профиль" component={RouterLink} to='/profile'/>
                    <Tab label="API" component={RouterLink} to='/apipage'/>
                    <Tab label="Войти" component={RouterLink} to='/login'/>
                    <Tab label="Зарегистрироваться" component={RouterLink} to='/register'/>
                </Tabs>
            </Box>
        </Box>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/chats/*" element={<Chats />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Registration />}></Route>
            <Route element={<RequireAuth />} >
                <Route path="/profile" element={<Profile />} />
                <Route path="/apipage" element={<CatsFacts />} />
                <Route index path="/chats" element={<Chats />} />
                <Route path="/chats/:chatId" element={<Chats />} />
            </Route>
        </Routes>
    </div>   
    )
}