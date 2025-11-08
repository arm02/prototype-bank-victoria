export interface AdsArtcileResponseCollection {
  uuid: string;
  title: string;
  image_mobile: string;
  image_dekstop: string;
  link: string;
  view: string;
  createdAt: string;
  updatedAt: string;
}

export class FormAdsArticleRequest {
  uuid?: string = '';
  title?: string = '';
  image_mobile: string | null = '';
  image_desktop: string | null = '';
  link: string = '';
}

export const AdsArticleDisplayedColumn = [
  {
    value: 'title',
    type: 'string',
    title: 'Judul',
    width: '20%',
  },
  {
    value: 'image_mobile',
    type: 'image',
    title: 'Gambar Mobile',
    width: '20%',
  },
  {
    value: 'image_desktop',
    type: 'image',
    title: 'Gambar Desktop',
    width: '20%',
  },
  {
    value: 'link',
    type: 'string',
    title: 'Tautan',
    width: '15%',
  },
  {
    value: 'view',
    type: 'string',
    title: 'View',
    width: '15%',
  },
  {
    value: 'action',
    actions: ['edit', 'delete'],
    type: 'action',
    title: 'Action',
    width: '10%',
  },
];
