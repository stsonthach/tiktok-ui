import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, LiveActiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to="/" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to="/following" icon={<UserGroupIcon />} activeIcon={<UserGroupIcon />} />
                <MenuItem title="LIVE" to="/live" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
