import React from "react";
import { Grid, List, ListItemButton, ListItemText, Typography, IconButton, Link
} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const ChatsList = ({chats}) => {

    return (
        <Grid sx={{width: 300}}>
            <Typography variant="h6" textAlign="left">Список чатов</Typography>
            <List>
                {Object.keys(chats).map((chat, index) => (
                    <Link 
                        underline="none"
                        component={RouterLink} 
                        to={`/chats/${chat}`} 
                        key={index}
                        >
                        <ListItemButton> 
                            <ListItemText primary={chats[chat].name} />
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemButton> 
                    </Link>
                ))}
            </List>
        </Grid>
    )
};

export default ChatsList;