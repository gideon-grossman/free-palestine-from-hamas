import { useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LoopIcon from '@mui/icons-material/Loop';
import ShareIcon from '@mui/icons-material/Share';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinIcon,
    LinkedinShareButton
} from 'react-share';
import { SocialIcon } from 'react-social-icons';
import { useEffect } from 'react';
import { useLanguage } from 'contexts/language';
// import InstagramEmbed from 'react-instagram-embed';
// import 'react-instagram-embed/dist/index.css';

const StyledButton = styled(Button)(() => ({
    backgroundColor: 'black',
    borderRadius: '8px',
    height: '40px',
    padding: '16px',
    color: 'white',
    flex: '1',
    '&:hover': { backgroundColor: 'grey' }
}));

const Hashtag = () => (
    <Box
        sx={{
            border: '1px solid black',
            borderRadius: '8px',
            height: '40px',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        #freepalestine<b>fromhamas</b>
    </Box>
);

const EXAMPLE_IMG_URL =
    'https://www.livemint.com/lm-img/img/2023/10/10/600x338/California-Israel-Palestinians-2_1696901506265_1696901545401.jpg';
const Post = () => {
    const { language } = useLanguage();
    const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);
    const [currPostURL, setCurrPostURL] = useState<string>(EXAMPLE_IMG_URL);
    const [nextText, setNextText] = useState<string>('');
    const [shareText, setShareText] = useState<string>('');
    const [choosePlatformText, setChoosePlatformText] = useState<string>('');
    const [choosePlatformDesc, setChoosePlatformDesc] = useState<string>('');
    useEffect(() => {
        switch (language) {
            case 'En':
                setNextText('next');
                setShareText('Share');
                setChoosePlatformText('Choose Platform');
                setChoosePlatformDesc(
                    "Select the social media platform where you'd like to share this post."
                );
                break;
            case 'עִב':
                setNextText('הַבָּא');
                setShareText('שתפו');
                setChoosePlatformText('בחר פלטפורמה');
                setChoosePlatformDesc('בחר את פלטפורמת המדיה החברתית שבה תרצה לשתף את הפוסט הזה');
                break;
        }
    }, [language]);
    const ShareModal = () => (
        <Dialog
            open={shareModalOpen}
            onClose={() => setShareModalOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{choosePlatformText}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {choosePlatformDesc}
                </DialogContentText>
            </DialogContent>

            <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton sx={{ width: '50px' }} onClick={() => setShareModalOpen(false)}>
                    <SocialIcon
                        url="https://instagram.com"
                        href="https://instagram.com"
                        style={{ width: '32px', height: '32px' }}
                    />
                </IconButton>
                <FacebookShareButton url={currPostURL}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={currPostURL}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton url={EXAMPLE_IMG_URL}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </DialogActions>
        </Dialog>
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
                sx={{
                    width: '300px',
                    height: '275px',
                    backgroundColor: 'black',
                    borderRadius: '8px',
                    color: 'white',
                    textAlign: 'center',
                    padding: '16px'
                }}
            >
                <img src={currPostURL} width="300px" />
                {/* <InstagramEmbed
                    url="https://www.instagram.com/p/EXAMPLE/" // Replace with the URL of the Instagram post you want to embed
                    maxWidth={320} // Adjust the width as needed
                    hideCaption={false} // Set to true to hide the post caption
                /> */}
            </Box>
            <Box
                id="buttons"
                sx={{
                    marginTop: '16px',
                    marginBottom: '16px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '32px'
                }}
            >
                <StyledButton>
                    <Box sx={{ marginRight: '16px' }}>{nextText}</Box>
                    <LoopIcon />
                </StyledButton>
                <StyledButton onClick={() => setShareModalOpen(true)}>
                    <Box sx={{ marginRight: '16px' }}>{shareText}</Box>
                    <ShareIcon />
                </StyledButton>
            </Box>
            <Hashtag />
            <ShareModal />
        </Box>
    );
};

export default Post;
