import { Box, Button } from '@mui/material';
import { useState } from 'react';

const LanguagePicker = () => {
    enum LANGUAGES {
        ENGLISH = 'En',
        HEBREW = 'עב'
    }
    const [language, setLanguage] = useState<string>('En');

    const changeLanguage = () => {
        if (language === 'En') setLanguage('עב');
        else if (language === 'עב') setLanguage('En');
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <Button onClick={() => changeLanguage()} variant="outlined">
                {language}
            </Button>
        </Box>
    );
};

export default LanguagePicker;
