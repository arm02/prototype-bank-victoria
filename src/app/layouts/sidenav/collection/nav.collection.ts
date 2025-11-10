export interface Navigation {
  title: string;
  icon: string;
  path: string;
  route?: string;
  role: string;
}

export interface NavigationGroup {
  groupTitle: string;
  icon: string;
  path: string;
  items: Navigation[];
  isVisible?: boolean;
}

export const NavigationData: Navigation[] = [
  {
    title: 'Dashboard',
    icon: 'fa fa-tachometer fa-2x',
    path: '/',
    route: undefined,
    role: 'all',
  },
];

export const NavigationGroupData: NavigationGroup[] | any = [
  {
    groupTitle: 'Beranda',
    icon: 'beranda',
    path: '/',
    items: [],
    route: undefined,
    role: 'all',
    isVisible: true,
  },
  {
    groupTitle: 'Konfigurasi Halaman',
    icon: 'page-configuration',
    items: [
      {
        title: 'Berita Utama',
        icon: 'fa fa-home fa-2x',
        path: '/pages/homepage',
        route: 'homepage',
        role: 'all',
      },
      {
        title: 'Kanal',
        icon: 'fa fa-globe fa-2x',
        path: '/pages/channels',
        route: 'channels',
        role: 'all',
      },
      {
        title: 'Situs',
        icon: 'fa fa-laptop fa-2x',
        path: '/pages/sites',
        route: 'sites',
        role: 'all',
      },
    ],
    isVisible: true,
  },
  {
    groupTitle: 'Kelola Berita',
    icon: 'berita',
    items: [
      {
        title: 'Berita Regular',
        icon: 'fa fa-book fa-2x',
        path: '/pages/news',
        route: 'news',
        role: 'all',
      },
      {
        title: 'Berita Media',
        icon: 'fa fa-picture-o fa-2x',
        path: '/pages/media',
        route: 'media',
        role: 'all',
      },
    ],
    isVisible: true,
  },
  {
    groupTitle: 'Kelola Media / Widget',
    icon: 'widget',
    items: [
      {
        title: 'Aset Media',
        icon: 'fa fa-camera-retro fa-2x',
        path: '/pages/image-list',
        route: 'image-list',
        role: 'all',
      },
      {
        title: 'Trading View',
        icon: 'fa fa-code fa-2x',
        path: '/pages/trading-code',
        route: 'trading-code',
        role: 'admin',
      },
      {
        title: 'Data Wrapper',
        icon: 'fa fa-signal fa-2x',
        path: '/pages/data-wrapper',
        route: 'data-wrapper',
        role: 'all',
      },
    ],
    isVisible: true,
  },
  {
    groupTitle: 'Kelola Pengguna',
    icon: 'users',
    items: [
      {
        title: 'Penulis',
        icon: 'fa fa-film fa-2x',
        path: '/pages/writer',
        route: 'writer',
        role: 'editor',
      },
      {
        title: 'Pengguna',
        icon: 'fa fa-users fa-2x',
        path: '/pages/users',
        route: 'users',
        role: 'admin',
      },
    ],
    isVisible: true,
  },
  {
    groupTitle: 'Pengiklanan',
    icon: 'pemasaran',
    items: [
      {
        title: 'Kelola Iklan Regular',
        icon: 'fa fa-bars fa-2x',
        path: '/pages/ads',
        route: 'ads',
        role: 'all',
      },
      {
        title: 'Kelola Iklan Artikel',
        icon: 'fa fa-bars fa-2x',
        path: '/pages/ads-article',
        route: 'ads-article',
        role: 'all',
      },
    ],
    isVisible: true,
  },
  {
    groupTitle: 'Kontak',
    icon: 'kontak',
    items: [
      {
        title: 'Formulir Kontak',
        icon: 'fa fa-list-alt fa-2x',
        path: '/pages/contacts',
        route: 'contacts',
        role: 'admin',
      },
      {
        title: 'Email Berlangganan',
        icon: 'fa fa-envelope fa-2x',
        path: '/pages/newslatter',
        route: 'newslatter',
        role: 'admin',
      },
    ],
    isVisible: true,
  },
];

// BANK VICTORIA
export const VictoriaNavigationGroupData: NavigationGroup[] | any = [
  {
    groupTitle: 'Beranda',
    icon: 'home',
    path: '/',
    items: [],
    route: undefined,
    role: 'all',
    isVisible: true,
  },
  {
    groupTitle: 'Program',
    icon: 'box-search',
    path: '/lms/program',
    items: [],
    route: undefined,
    role: 'all',
    isVisible: true,
  },
  {
    groupTitle: 'Jadwal Pelatihan',
    icon: 'calendar',
    path: '/lms/jadwal-pelatihan',
    items: [],
    route: undefined,
    role: 'all',
    isVisible: true,
  },
];