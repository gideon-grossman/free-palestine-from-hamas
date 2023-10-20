import {Box, Button} from '@mui/material';
import {styled} from '@mui/material/styles';
import LoopIcon from '@mui/icons-material/Loop';
import ShareIcon from '@mui/icons-material/Share';
const StyledButton = styled(Button)(() => ({
   backgroundColor: 'black', borderRadius: '8px', height: '40px', padding: '16px', color: 'white', flex: '1', '&:hover': {backgroundColor: 'grey'}}));

   const Hashtag = () => (<Box sx={{border: '1px solid black', borderRadius: '8px', height: '40px', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>#freepalestine<b>fromhamas</b></Box>)
       
const Post = () => {
    return (
<Box sx={{display: 'flex', flexDirection: 'column'}}>
    <Box sx={{width: '300px', height: '300px', backgroundColor: 'black', borderRadius: '8px', color: 'white', textAlign: 'center', padding: '16px'}}>Post will go here</Box>
    <Box id="buttons" sx={{marginTop: '16px', marginBottom: '16px', width: '100%', display: 'flex', justifyContent: 'space-between', gap: '32px'}}>
        <StyledButton ><Box sx={{marginRight: '16px'}}>next</Box><LoopIcon/></StyledButton>
        <StyledButton><Box sx={{marginRight: '16px'}}>share</Box><ShareIcon/></StyledButton>
    </Box>
    <Hashtag/>
</Box>
    )
}

export default Post;