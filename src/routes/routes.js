import HederOnly from '~/layouts/HeaderOnly';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

// Public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/@:nickname',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HederOnly,
    },
];

const privteRoutes = [];

export { publicRoutes, privteRoutes };
