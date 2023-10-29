import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Post from './Post';
const MainPage = () => {
    const [showPost, setShowPost] = useState<boolean>(false);
    useEffect(() => {
        // Set a timeout to hide the logo after 1000 milliseconds
        const timeoutId = setTimeout(() => {
            setShowPost(true);
        }, 2500);

        // Define a cleanup function that cancels the timeout if the component unmounts
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
                width: '100vw',
                flexDirection: 'column'
            }}
        >
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header />
                <Box sx={{ display: 'flex', justifyContent: 'center', flex: 'auto' }}>
                    {showPost && <Post />}
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default MainPage;
