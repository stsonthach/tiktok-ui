import HederOnly from '~/layouts/HeaderOnly';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';

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
    {
        path: '/live',
        component: Live,
    },
];

const privteRoutes = [];

export { publicRoutes, privteRoutes };
