import {Box} from '@mui/material';

const HeaderText = () => (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '16px', gap: '8px'}}>
        <Box sx={{textAlign: 'center', fontSize: '24px'}}>The conflict is complicated.</Box>
        <Box sx={{fontWeight: '800', textAlign: 'center', fontSize: '24px'}}>Terrorism is not.</Box>
        </Box>
)

export default HeaderText;