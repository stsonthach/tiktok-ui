import classNames from 'classnames/bind'; // chổ này là đc import thư viện vào nên mới dùng đc thư viện đó là: npm i classnames
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faFileVideo,
    faGear,
    faKeyboard,
    faSignIn,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Propper/Menu';
import Image from '~/components/Image';
import { Inbox, MessageIcon } from '~/components/Icons';
import Search from '~/components/Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            break;
        default:
    }
};

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const MENU_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@huy',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coin',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faFileVideo} />,

        title: 'LIVE Studio',
        to: '/live',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignIn} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const current = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo.default} alt="tiktok" />
                    </Link>
                </div>
                {/* search */}
                <Search />
                <div className={cx('action')}>
                    {current ? (
                        <>
                            <Tippy delay={(0, 200)} content="Upload video">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy delay={(0, 200)} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <Inbox />
                                </button>
                            </Tippy>
                            <Tippy delay={(0, 200)} content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary icon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={current ? MENU_USER : MENU_ITEMS} onChange={handleMenuChange}>
                        {current ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/31eff1af635f447c58ba0de5c7bf912e~c5_100x100.jpeg?x-expires=1674820800&x-signature=QpI%2BCQoJXNARMcRZN4rzPTPRBSE%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
