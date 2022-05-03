import React, { useState } from "react";
import { Grid, List, ListItemButton, ListItemText, Typography, IconButton, Link, Button, Dialog, DialogTitle, TextField
} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../store/chats/actions";
import { chatList } from "../store/chats/selectors";
import { padding } from "@mui/system";


const ChatsList = () => {
    const chats = useSelector(chatList)
    const [visible, setVisible] = useState(false);
    const [chatName, setChatName] = useState('');
    const dispatch = useDispatch();

    const handleChatName = (e) => {
        setChatName(e.target.value)
    }

    const handleClose = () => {
        setVisible(false)
    }

    const handleOpen = () => {
        setVisible(true)
    }
    const handleDelete = (e) => {
        dispatch(deleteChat( e.target.closest('button').id ))
    }

    const handleSave = () => {
        if(chatName && chatName !== ' ') {
            dispatch(addChat(chatName));
            setChatName('');
            handleClose()
        }
    }
    const handleEnterPressed = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault()
            handleSave();
            setVisible(false)
        }
    }

    return (
        <Grid sx={{width: 300}}>
            <Typography variant="h6" textAlign="left">Список чатов</Typography>
            <List>
                {chats?.length > 0 ? chats.map((chat, index) => (
                    <Link 
                        underline="none"
                        component={RouterLink} 
                        to={`/chats/${chat.id}`} 
                        key={index}
                        >
                        <ListItemButton> 
                            <ListItemText primary={chat.name} />
                            <IconButton id={chat.id} onClick={handleDelete} edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemButton> 
                    </Link>
                )) : <div>Создайте чат</div>}
            </List>
            <Button onClick={handleOpen} variant="contained">Добавить чат</Button>
            <Dialog  open={visible} onClose={handleClose} >
                <TextField 
                    style={{padding: 15}}
                    label="Введите имя чата"
                    variant="standard"
                    color="info"
                    value={chatName}
                    onChange={handleChatName}
                    onKeyDown={handleEnterPressed}
                    placeholder="Имя чата"
                />
                <Button
                    variant="contained" 
                    onClick={handleSave}>Добавить чат</Button>
            </Dialog>
        </Grid>
    )
};

export default ChatsList;