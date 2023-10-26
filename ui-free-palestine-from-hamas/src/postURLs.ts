const posts = [
    'https://www.instagram.com/p/CygHf89IzuK',
    'https://www.instagram.com/p/CyohQb-vFPe',
    'https://www.instagram.com/p/CyVbMDZgBm2',
    'https://www.instagram.com/p/CylW0qqLljZ',
    'https://www.instagram.com/reel/CyigCyxN-pj',
    'https://www.instagram.com/p/Cykv_SEIBv1',
    'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FYosHaddad%2Fvideos%2F1112898499593655%2F&show_text=false&width=267&name_placeholder=0',
    'https://www.instagram.com/reel/Cyglf7pL2ea',
    'https://www.instagram.com/p/CygTi30rey2',
    'https://www.instagram.com/p/CyUrD5pLb_y',
    'https://www.instagram.com/p/CPLVC9HDCM7',
    'https://www.instagram.com/reel/CyqZZYCLGN3',
    // 'https://fb.watch/nSH6C7Ax5F',

    // For facebook posts with this format, open the link, click share, then embed, copy and modify the hyperlink to match the following pattern.
    // https://fb.watch/nPUeQR6YB1/?mibextid=6aamW6
    'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FYosHaddad%2Fvideos%2F1112898499593655%2F&show_text=false&width=267&name_placeholder=3',

    // 'https://fb.watch/nPUeQR6YB1',

    // 'https://www.facebook.com/reel/300703919568856' embed not available.
    // 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F828782599034879%2F&show_text=false&width=267&t=0',

    // 'https://fb.watch/nPUeQR6YB1',
    'https://www.facebook.com/plugins/video.php?height=403&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F300703919568856%2F&show_text=false&width=560&',

    //https://www.facebook.com/100044282803756/posts/pfbid034Cu36GftozthpViDBNXP8WN6zxf8aDTRe1fymrKLmABnE2h5EPm2H8LwNpj5k3LAl/?mibextid=cr9u03
    'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhazinor%2Fposts%2Fpfbid0zfFrB73XxsawfmYEAAkvWHwZQ7no3soQxZsrzkmsRGWWFo6L9PU7tcJpFfqCXtLzl&show_text=true&width=500&'

    // 'https://www.facebook.com/reel/300703919568856',
    // 'https://vt.tiktok.com/ZSNheDuYJ',
    // 'https://www.tiktok.com/embed/v2/6718335390845095173',
    // 'https://www.tiktok.com/@scout2015/video/6718335390845095173',
    // 'https://www.tiktok.com/embed/v2/6718335390845095173'
    // 'https://www.tiktok.com/@darkv1ny/',
    // 'https://www.tiktok.com/@heyitsrenny/video/7291007659111697666?is_from_webapp=1&sender_device=pc'
    // 'https://www.tiktok.com/@heyitsrenny/video/7291007659111697666'
    // "https://www.tiktok.com/@heyitsrenny/video/7291007659111697666" data-video-id="7291007659111697666" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@heyitsrenny" href="https://www.tiktok.com/@heyitsrenny?refer=embed">@heyitsrenny</a> Free Palestine...from Hamas! <a title="hamasisisis" target="_blank" href="https://www.tiktok.com/tag/hamasisisis?refer=embed">#hamasisisis</a> <a title="supportisrael" target="_blank" href="https://www.tiktok.com/tag/supportisrael?refer=embed">#supportisrael</a> <a title="israel" target="_blank" href="https://www.tiktok.com/tag/israel?refer=embed">#israel</a> <a title="bringthemhome" target="_blank" href="https://www.tiktok.com/tag/bringthemhome?refer=embed">#bringthemhome</a> <a target="_blank" title="♬ original sound  - heyitsrenny" href="https://www.tiktok.com/music/original-sound-heyitsrenny-7291007807199972098?refer=embed">♬ original sound  - heyitsrenny</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
    // 'https://www.tiktok.com/@aishahus8/video/7292907793475046689?_r=1&u_code=eabm6faeik0abg&preview_pb=0&sharer_language=he&_d=eabm64aa8bcjge&share_item_id=7292907793475046689&source=h5_m&timestamp=1698069105&user_id=7287059619837461509&sec_user_id=MS4wLjABAAAAnd1YCjBdw6PW9P3p9NRi6yxq-IM1xo9Mpqrz7Tuyrs26DR_UJqzS8UmHVOjAZ-Tr&social_share_type=0&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7291935577402148610&share_link_id=cbf99368-bc69-4c58-b6d8-99fcb1e32412&share_app_id=1233&ugbiz_name=MAIN&ug_btm=b6880%2Cb2878'
    // 'https://vt.tiktok.com/ZSNhebLv6'
    //     'https://www.tiktok.com/embed/v2/ZSNhenmYc',
    // 'https://www.tiktok.com/embed/ZSNhewcTd/'
    // 'https://www.tiktok.com/embed/7072819797184171310',
    // 'https://www.facebook.com/hazinor/posts/pfbid0zfFrB73XxsawfmYEAAkvWHwZQ7no3soQxZsrzkmsRGWWFo6L9PU7tcJpFfqCXtLzl'
    //     'https://vt.tiktok.com/ZSNhdL3wJ/',
    //     'https://vt.tiktok.com/ZSNheoFna/',
    //     'https://vt.tiktok.com/ZSNhd8eJt/',
    //     'https://vt.tiktok.com/ZSNhetExB/',
    //     'https://vt.tiktok.com/ZSNhdLJCD/',
    //     'https://vt.tiktok.com/ZSNhdjkpH/',
    //     'https://vt.tiktok.com/ZSNhewNe5/',
    //     'https://vt.tiktok.com/ZSNheKmE3/',
];

export default posts;
