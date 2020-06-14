import { NbMenuItem } from '@nebular/theme';

export function getMenuItems(role: string): NbMenuItem[] {
  switch (role) {
    case 'STUDENT': return MENU_ITEMS_STUDENT;
    case 'ADMIN': return MENU_ITEMS_ADMIN;
    case 'SUPERVISOR': return MENU_ITEMS_SUPERVISOR;
  }

}

export const MENU_ITEMS_ADMIN: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/pages/admin/dashboard',
    home: true,
  },
  {
    title: 'Certification',
    icon: 'home-outline',
    link: '/pages/admin/certification',
  },
  {
    title: 'Supervisor',
    icon: 'home-outline',
    link: '/pages/admin/certification',
  },
  {
    title: 'Exam Room',
    icon: 'home-outline',
    link: '/pages/admin/exam-room',
  },
];

export const MENU_ITEMS_STUDENT: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/pages/student/dashboard',
    home: true,
  },
  {
    title: 'Certification',
    icon: 'home-outline',
    link: '/pages/student/certification',
  },
  {
    title: 'Exam',
    icon: 'home-outline',
    link: '/pages/student/exam',
  },
];

export const MENU_ITEMS_SUPERVISOR: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/pages/supervisor/dashboard',
    home: true,
  },
  {
    title: 'Exam',
    icon: 'home-outline',
    link: '/pages/supervisor/exam',
  },
];
