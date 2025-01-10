import { CircleUserIcon, CompassIcon, FingerprintIcon, GlobeIcon, HouseIcon } from 'lucide-react';

import { AUTH_PAGE } from '@/lib/config/routes.config';

export const MENU_LINKS = [
    {
        Icon: HouseIcon,
        link: AUTH_PAGE.HOME,
    },
    {
        Icon: CompassIcon,
        link: AUTH_PAGE.EVENTS,
    },
    {
        Icon: FingerprintIcon,
        link: AUTH_PAGE.FINDER,
    },
    {
        Icon: GlobeIcon,
        link: AUTH_PAGE.CLUBS,
    },
    {
        Icon: CircleUserIcon,
        link: AUTH_PAGE.PROFILE,
    },
];
