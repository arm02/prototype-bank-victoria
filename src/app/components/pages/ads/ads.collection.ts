export interface AdsResponseCollection {
  uuid: string;
  name: string;
  type: string;
  view_type: string;
  view_channel: string;
  link: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export class FormAdsRequest {
  uuid?: string = '';
  name: string = '';
  type: string = '';
  view_type: any = '';
  view_channel: any = '';
  link: string = '';
  image: string = '';
}

export const AdsDisplayedColumn = [
  {
    value: 'name',
    type: 'string',
    title: 'Name',
    width: '20%',
  },
  {
    value: 'type',
    type: 'string-capitalize',
    title: 'Type',
    width: '10%',
  },
  {
    value: 'view_type',
    type: 'array-value',
    title: 'View Type',
    width: '10%',
  },
  {
    value: 'view_channel',
    type: 'array-value',
    title: 'View Channel',
    width: '15%',
  },
  {
    value: 'link',
    type: 'string',
    title: 'Link',
    width: '15%',
  },
  {
    value: 'image',
    type: 'image',
    title: 'Image',
    width: '20%',
  },
  {
    value: 'action',
    actions: ['edit', 'delete'],
    type: 'action',
    title: 'Action',
    width: '10%',
  },
];
