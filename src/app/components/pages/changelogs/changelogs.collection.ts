export class ChangeLogsRequest {
  uuid: string = '';
  title: string = '';
  content: string = '';
}

export interface ChangeLogsResponse {
  title: string;
  content: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChangeLogsResponseCollection {
  success: boolean;
  page: number;
  limit: number;
  count: number;
  data: ChangeLogsResponse[];
}
