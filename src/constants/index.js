import Home from '../assets/icons/Home.svg';
import Upcoming from '../assets/icons/upcoming.svg';
import Previous from '../assets/icons/previous.svg';
import Recordings from '../assets/icons/Video.svg';
import PersonalRoom from '../assets/icons/add-personal.svg';

export const sidebarLinks = [
{
    imgURL: Home,
    route: '/',
    label: 'Home',
},

{
    imgURL: Upcoming,
    route: '/upcoming',
    label: 'Upcoming',
},
{
    imgURL: Previous,
    route: '/previous',
    label: 'Previous',
},
{
    imgURL: Recordings,
    route: '/recordings',
    label: 'Recordings',
},
{
    imgURL: PersonalRoom,
    route: '/personal-room',
    label: 'Personal Room',
},
];

export const avatarImages = [
    '/images/avatar-1.jpeg',
    '/images/avatar-2.jpeg',
    '/images/avatar-3.png',
    '/images/avatar-4.png',
    '/images/avatar-5.png',
];
