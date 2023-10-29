import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useLanguage } from 'contexts/language';

const LanguagePicker = () => {
    const { language, setLanguage } = useLanguage();
    const changeLanguage = () => {
        if (language === 'En') setLanguage('עִב');
        else if (language === 'עִב') setLanguage('عربي');
        else if (language === 'عربي') setLanguage('En');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                height: 'fit-content',
                justifyContent: 'space-between',
                flex: 1
            }}
        >
            <Button onClick={() => changeLanguage()} variant="outlined">
                {language}
            </Button>
        </Box>
    );
};

export default LanguagePicker;
