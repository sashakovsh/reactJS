import { Box, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <Box sx={{ justifyContent: 'center', paddingTop: '50px' }}>
          <Tab label="Список чатов" component={Link} to='/chats'/>
          <Tab label="Профиль" component={Link} to='/profile'/>
      </Box>
    )
}

export default Home;