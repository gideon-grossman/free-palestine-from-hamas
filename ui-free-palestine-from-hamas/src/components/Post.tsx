import { useMemo, useState } from 'react';
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
import posts from 'postURLs';
import { TikTokEmbed } from 'react-social-media-embed';

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

const Post = () => {
    const { language } = useLanguage();
    const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);
    const [nextText, setNextText] = useState<string>('');
    const [shareText, setShareText] = useState<string>('');
    const [choosePlatformText, setChoosePlatformText] = useState<string>('');
    const [choosePlatformDesc, setChoosePlatformDesc] = useState<string>('');
    const [postIndex, setPostIndex] = useState<number>(0);
    const advanceToNextPost = () => {
        setPostIndex((postIndex + 1) % posts.length);
    };
    const currPostURL = posts[postIndex];
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
            case 'عربي':
                setNextText('التالي');
                setShareText('يشارك');
                setChoosePlatformText('اختر منصة');
                setChoosePlatformDesc(
                    'اختر إحدى منصات التواصل الاجتماعي التي ترغب في مشاركة هذا المنشور عليها'
                );
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

            <DialogActions
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '16px'
                    }}
                >
                    {/* <IconButton sx={{ width: '50px' }} onClick={() => setShareModalOpen(false)}>
                        <SocialIcon
                            url="https://instagram.com"
                            href="https://instagram.com"
                            style={{ width: '32px', height: '32px' }}
                        />
                    </IconButton> */}
                    <FacebookShareButton hashtag={'freepalestinefromhamas'} url={currPostURL}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton hashtags={['freepalestinefromhamas']} url={currPostURL}>
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <LinkedinShareButton url={currPostURL}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </Box>
                {navigator.share && (
                    <Box sx={{ marginTop: 0 }}>
                        <StyledButton
                            sx={{ marginLeft: '-8px' }}
                            onClick={() => {
                                navigator
                                    .share({
                                        // title: 'Share this post',
                                        // text: '#FreePalestineFromHamas',
                                        url: currPostURL
                                    })
                                    .then(() => console.log('Successfully shared'))
                                    .catch((error) => console.error('Error sharing:', error));
                            }}
                        >
                            More Sharing Options
                        </StyledButton>
                    </Box>
                )}
            </DialogActions>
        </Dialog>
    );

    const isTiktokPost = (url: string) => url.includes('tiktok');
    const TikTokPost = () => <TikTokEmbed url={currPostURL} width={325} linkText="Loading" />;
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
                id="iframe-wrapper"
                sx={{
                    width: '300px',
                    height: 'calc(100vh - 330px)',
                    backgroundColor: 'black',
                    borderRadius: '8px',
                    color: 'white',
                    textAlign: 'center',
                    padding: '8px'
                }}
            >
                {isTiktokPost(currPostURL) ? (
                    <div
                        style={{
                            justifyContent: 'center',
                            overflowY: 'scroll',
                            height: '100%'
                        }}
                    >
                        <TikTokPost />
                    </div>
                ) : (
                    <iframe id="iframe" height="100%" src={`${currPostURL}/embed`}></iframe>
                )}
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
                <StyledButton onClick={() => advanceToNextPost()}>
                    <Box sx={{ marginRight: '16px' }}>{nextText}</Box>
                    <LoopIcon />
                </StyledButton>
                <StyledButton id="shareButton" onClick={() => setShareModalOpen(true)}>
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
