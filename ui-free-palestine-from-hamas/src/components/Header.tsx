import { Box, IconButton } from '@mui/material';
import Logo from './Logo';
import HeaderText from './HeaderText';
import LanguagePicker from './LanguagePicker';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => (
    <Box sx={{ display: 'flex', margin: '16px', flexDirection: 'column', alignItems: 'center' }}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}
        >
            <LanguagePicker />
            <Logo />
            <Box id="options-menu">
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </Box>
        </Box>
        <HeaderText />
    </Box>
);

export default Header;
