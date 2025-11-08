export interface ChannelResponseCollection {
  page_id: number;
  pageName: string;
  createdAt: string;
  updatedAt: string;
}

export class CreateChannelRequest {
  page_id: string = '';
  pageName: string = '';
}
