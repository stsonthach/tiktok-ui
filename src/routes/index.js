import HederOnly from '~/components/Layout/HeaderOnly';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

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
        path: '/upload',
        component: Upload,
        layout: HederOnly,
    },
];

const privteRoutes = [];

export { publicRoutes, privteRoutes };
