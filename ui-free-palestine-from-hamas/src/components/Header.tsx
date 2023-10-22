import { Box } from '@mui/material';
import Logo from './Logo';
import HeaderText from './HeaderText';
import LanguagePicker from './LanguagePicker';
const Header = () => (
    <Box sx={{ display: 'flex', margin: '16px', flexDirection: 'column', alignItems: 'center' }}>
        <LanguagePicker />
        <Logo />
        <HeaderText />
    </Box>
);

export default Header;
