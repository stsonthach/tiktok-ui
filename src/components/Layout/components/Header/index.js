import classNames from 'classnames/bind'; // chổ này là đc import thư viện vào nên mới dùng đc thư viện đó là: npm i classnames
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                {/* search */}
            </div>
        </header>
    );
}

export default Header;
