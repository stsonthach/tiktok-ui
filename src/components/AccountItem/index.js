import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/94b3033d7987656e997e00885857eee4~c5_100x100.jpeg?x-expires=1674720000&x-signature=emlLkjyQFHtl5sT9prrXLAschoY%3D"
                alt="Hoas"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
