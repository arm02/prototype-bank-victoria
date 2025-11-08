export interface NewsResponseCollection {
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
  writers: string[];
  reporters: string[];
  page_view: number;
  site_name: string;
  site: any;
}

export interface Writer {
  name: string;
  user_id: string;
}

export interface Page {
  pageName: string;
}

export class CreateNewsRequestCollection {
  post_id: string = '';
  titlePost: string = '';
  linkPost: string = '';
  content: string = '';
  date: number = 0;
  thumbnail: string = '';
  textThumbnail: string = '';
  pageId: string = '';
  writerId: string[] = [];
  reporters: string[] = [];
  customFieldCheckOption: string[] = [];
  customFieldCheckValue: string[] = [];
  type: string = '';
  metaDesc: string = '';
  metaKeyword: string = '';
  metaTopic: string = '';
  hashtag: any = [];
  status: string = 'draft';
  listed: string = 'listed';
  site_id: string = 'main';
  ads_article: string = '';
  selected_ads_article: string = '';
  generative_ads: number = 0;
  media_list: any = [];
}

export const NewsTypeCollectionData = [
  {
    label: 'Opinion',
    value: 'opinion',
  },
  {
    label: 'Interview',
    value: 'interview',
  },
  {
    label: 'Regular News',
    value: 'regular-news',
  },
  {
    label: 'Evergreen',
    value: 'evergreen',
  },
  {
    label: 'Company',
    value: 'company',
  },
  {
    label: 'Glosarium',
    value: 'glosarium',
  },
];
