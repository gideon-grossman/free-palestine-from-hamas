import {Box} from '@mui/material';
import Footer from './Footer';
import Header from './Header';
import Post from './Post';
const MainPage = () => {
    return <Box sx={{display: 'flex', height: '100vh',width: '100vw', flexDirection: 'column'}}>
        <Box sx={{flex: 1}}><Header/>
        <Box sx={{display: 'flex', justifyContent: 'center'}}><Post/></Box>
        </Box>
        <Footer/>
        </Box>
}

export default MainPage;