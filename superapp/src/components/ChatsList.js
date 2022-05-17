import { Grid, List, ListItemButton, ListItemText, Typography, IconButton, Link, Button, Dialog, TextField
} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const ChatsList = (
    {chats, handleDelete, handleOpen, handleClose, handleChatName, handleEnterPressed, chatName, visible, handleSave}
    ) => 
    (<Grid sx={{width: 300}}>
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
                            <IconButton onClick={handleDelete(chat.id)} edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemButton> 
                    </Link>
                )) : <div>Создайте чат</div>}
            </List>
            <Button onClick={handleOpen} variant="contained">Добавить чат</Button>
            <Dialog 
                
                open={visible} 
                onClose={handleClose}  
                PaperProps={{
                    style: {
                    width: 300,
                    backgroundColor: 'transparent',
                    boxShadow: 'none'}
                    }}>
                <TextField 
                    autoFocus
                    label="Введите имя чата"
                    variant="standard"
                    color="primary"
                    value={chatName}
                    onChange={handleChatName}
                    onKeyDown={handleEnterPressed}
                    placeholder="Имя чата"
                    InputLabelProps={{
                        style: {
                          color: 'white'
                        } }}
                    InputProps={{style: {
                        color: 'white',
                        marginBottom: 15
                    }}}
                />
                <Button
                    variant="contained" 
                    onClick={handleSave}>Добавить чат</Button>
            </Dialog>
        </Grid>
);

export default ChatsList;