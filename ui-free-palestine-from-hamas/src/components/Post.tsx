import {useState} from 'react';
import {Box, Button, Dialog, DialogTitle,DialogContent,DialogContentText, DialogActions} from '@mui/material';
import {styled} from '@mui/material/styles';
import LoopIcon from '@mui/icons-material/Loop';
import ShareIcon from '@mui/icons-material/Share';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { TwitterShareButton, TwitterIcon } from 'react-share';

const StyledButton = styled(Button)(() => ({
   backgroundColor: 'black', borderRadius: '8px', height: '40px', padding: '16px', color: 'white', flex: '1', '&:hover': {backgroundColor: 'grey'}}));

const Hashtag = () => (<Box sx={{border: '1px solid black', borderRadius: '8px', height: '40px', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>#freepalestine<b>fromhamas</b></Box>)

const Post = () => {
    const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);

    const ShareModal = () => (
        <Dialog
        open={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Choose a platform."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Select the social media platform where you'd like to share this post.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{display: 'flex', justifyContent: 'center'}}>
          <StyledButton href="instagram-stories://camera"
onClick={() => setShareModalOpen(false)}>Instagram</StyledButton>
          {/* <StyledButton onClick={() => setShareModalOpen(false)} autoFocus>
            Facebook
          </StyledButton> */}
          <div>
      <FacebookShareButton
        url={'https://www.example.com'}
        quote={'Free Palestine From Hamas'}
        hashtag="#freepalestinefromhamas"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
    <div>
    <TwitterShareButton
  url={'https://www.example.com'}
//   quote={'Free Palestine From Hamas'}
//   hashtag="#freepalestinefromhamas"
>
  <TwitterIcon size={32} round />
</TwitterShareButton>
      </div>
          <StyledButton onClick={() => setShareModalOpen(false)}>LinkedIn</StyledButton>
          <script src="https://platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
<script type="IN/Share" data-url="https://www.linkedin.com"></script>
        </DialogActions>
      </Dialog>);

    return (
<Box sx={{display: 'flex', flexDirection: 'column'}}>
    <Box sx={{width: '300px', height: '300px', backgroundColor: 'black', borderRadius: '8px', color: 'white', textAlign: 'center', padding: '16px'}}>Post will go here</Box>
    <Box id="buttons" sx={{marginTop: '16px', marginBottom: '16px', width: '100%', display: 'flex', justifyContent: 'space-between', gap: '32px'}}>
        <StyledButton ><Box sx={{marginRight: '16px'}}>next</Box><LoopIcon/></StyledButton>
        <StyledButton onClick={() => setShareModalOpen(true)}><Box sx={{marginRight: '16px'}}>share</Box><ShareIcon/></StyledButton>
    </Box>
    <Hashtag/>
    <ShareModal/>
</Box>
    )
}

export default Post;