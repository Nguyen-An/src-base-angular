import { NavMenu } from "@interfaces/general/nav-menu.interface"

const dashboard: NavMenu[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'item',
        iconType: 'feather',
        icon: 'icon-home',
        key: 'dashboard',
        submenu: [],
    },
]



export const navConfiguration: NavMenu[] = [
    ...dashboard,
    // ...staff
]