import React from 'react';

// --- Icon Definitions (SVG paths are used from a standard library for clarity) ---

const HomeSVG = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.423-.423 1.1-.423 1.526 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h9.75M16.5 7.5v8.25m-6.75-8.25h1.5a.75.75 0 0 1 .75.75v3.75m-9-3.75h1.5a.75.75 0 0 0 .75-.75V8.25m4.5 4.5V20.25h.75v-7.5" />
    </svg>
);

const UsersSVG = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.125V21a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75v-2.25M7.5 12h-1.5a6 6 0 1 0 0 12h1.5m6-12h1.5a6 6 0 1 1 0 12h-1.5m-6-12a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm6 0a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
    </svg>
);

const InfoSVG = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
    </svg>
);

const SearchSVG = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);

const HeartSVG = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
);

const CalendarSVG = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5" />
    </svg>
);

const PhoneSVG = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A2.25 2.25 0 0 0 4.5 9v10.5a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 21.75 19.5V9a2.25 2.25 0 0 0-2.25-2.25h-4.5m-1.218 9.75v.007h.008v-.007h-.008Zm5.717 0v.007h.008v-.007h-.008Z" />
    </svg>
);

const MailSVG = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75m19.5 0v7.5m0-7.5v.75m0 0-9.75 5.25m-9.75 0 9.75 5.25m-9.75-5.25V6.75m0 0v.75" />
    </svg>
);

const PlusSVG = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

// 🔥 ADDED ICONS FOR HAMBURGER MENU 🔥
const MenuSVG = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const XSVG = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

// --- The Export Object ---
export const Icons = {
    Home: HomeSVG,
    Users: UsersSVG,
    Info: InfoSVG,
    Search: SearchSVG,
    Heart: HeartSVG,
    Calendar: CalendarSVG,
    Phone: PhoneSVG,
    Mail: MailSVG,
    Plus: PlusSVG,
    
    // 🔥 Must include these for the Header component to work!
    Menu: MenuSVG,
    X: XSVG,
};

// --- Destructured Export ---
export const { Home, Users, Info, Search, Heart, Calendar, Phone, Mail, Plus, Menu, X } = Icons;