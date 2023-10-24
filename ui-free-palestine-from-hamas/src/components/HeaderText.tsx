import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useLanguage } from 'contexts/language';

const HeaderText = () => {
    const { language } = useLanguage();
    const [headerText, setHeaderText] = useState<string>('');
    const [headerSubtext, setHeaderSubtext] = useState<string>('');
    useEffect(() => {
        switch (language) {
            case 'En':
                setHeaderText('The conflict is complicated');
                setHeaderSubtext('Terrorism is not');
                break;
            case 'עִב':
                setHeaderText('עוזרים לעולם להבין');
                setHeaderSubtext('לטרור אין צדדים');
                break;
            case 'عربي':
                setHeaderText('لا مستقبل مع القيادة الإرهابية');
                setHeaderSubtext('');
        }
    }, [language]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: '16px',
                gap: '8px'
            }}
        >
            <Box sx={{ textAlign: 'center', fontSize: '24px' }}>{headerText}</Box>
            <Box sx={{ fontWeight: '800', textAlign: 'center', fontSize: '24px' }}>
                {headerSubtext}
            </Box>
        </Box>
    );
};

export default HeaderText;
