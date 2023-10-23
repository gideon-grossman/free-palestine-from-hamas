import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useLanguage } from 'contexts/language';

const LanguagePicker = () => {
    const { language, setLanguage } = useLanguage();
    const changeLanguage = () => {
        if (language === 'En') setLanguage('עִב');
        else if (language === 'עִב') setLanguage('En');
    };

    return (
        <Box sx={{ display: 'flex', height: 'fit-content', justifyContent: 'space-between' }}>
            <Button onClick={() => changeLanguage()} variant="outlined">
                {language}
            </Button>
        </Box>
    );
};

export default LanguagePicker;
