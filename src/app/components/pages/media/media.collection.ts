import { Page, Writer } from '../news/news.collection';

export interface MediaResponseCollection {
  post_id: string;
  titlePost: string;
  linkPost: string;
  textThumbnail: string;
  date: number;
  thumbnail: string;
  type: string;
  page_id: number;
  writer_id: string;
  createdAt: string;
  updatedAt: string;
  page: Page;
  page_name: string;
  writer: Writer;
  writer_name: string;
  post_media: any;
  page_view: number;
  site: any;
  site_name: string;
}

export class CreateMediaRequestCollection {
  post_id: string = '';
  titlePost: string = '';
  linkPost: string = '';
  content: string = '';
  date: number = 0;
  thumbnail: string = '';
  textThumbnail: string = '';
  pageId: string = '';
  writerId: string = '';
  type: string = '';
}

export const MediaTypeCollectionData = [
  {
    label: 'Image',
    value: 'image',
  },
  {
    label: 'Video',
    value: 'video',
  },
];
