import React, { useState } from 'react';
import { Route, Routes, Link as RouterLink } from 'react-router-dom';
import Chats from './Chats';
import Profile from './Profile';
import { Box, Tab, Tabs } from '@mui/material';
import Home from './Home';

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
                </Tabs>
            </Box>
        </Box>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route
                path="/chats/:chatId" 
                element={<Chats />}>
            </Route>
            <Route path="/chats/*" element={<Chats />}></Route>
        </Routes>
    </div>   
    )
}