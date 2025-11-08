export interface ImagesResponseCollection {
  image_id: string;
  imageDesc: string;
  image: string;
  user_id: string;
  date: number;
  createdAt: string;
  updatedAt: string;
  user: UserCollection;
  name: string;
  type: string;
  tag: any;
}

export class CreateImagesRequest {
  image_id: string = '';
  imageDesc: string = '';
  date: number = 0;
  userId: string = '';
  image: string = '';
  title: string = '';
  source: string = '';
  photographer: string = '';
  type: string = '';
  tag: any = [];
}

export interface UserCollection {
  user_id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
