import { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Logo from './Logo';
import HeaderText from './HeaderText';
import LanguagePicker from './LanguagePicker';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    return (
        <Box
            sx={{ display: 'flex', margin: '16px', flexDirection: 'column', alignItems: 'center' }}
        >
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
                <Box
                    id="options-menu"
                    sx={{
                        flex: 1,
                        justifyContent: 'end',
                        display: 'flex',
                        alignSelf: 'start'
                    }}
                >
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Box>
            <HeaderText />
        </Box>
    );
};

export default Header;
