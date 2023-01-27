import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind'; // chổ này là đc import thư viện vào nên mới dùng đc thư viện đó là: npm i classnames
import { Wrapper as PropperWrapper } from '~/components/Propper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const handleDefalt = () => {};

function Menu({ children, items, onChange = handleDefalt, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
            <PropperWrapper>
                {history.length > 1 && <Header title="Language" onBack={handleBack} />}
                <div className={cx('menu-srollable')}>{renderItem()}</div>
            </PropperWrapper>
        </div>
    );

    const handleResetMenu = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            hideOnClick={hideOnClick}
            onHidden={handleResetMenu}
            interactive={true}
            delay={[0, 500]}
            placement="bottom-end"
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
