import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind'; // chổ này là đc import thư viện vào nên mới dùng đc thư viện đó là: npm i classnames
import { Wrapper as PropperWrapper } from '~/components/Propper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
    const renderItem = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };

    return (
        <Tippy
            interactive={true}
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PropperWrapper>{renderItem()}</PropperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
