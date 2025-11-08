export interface DataWrapperResponseCollection {
  uuid: string;
  name: string;
  link: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  uploadedRole: string;
  context: string;
  notes: string;
}

export class DataWrapperRequest {
  uuid: string = '';
  name: string = '';
  link: string = '';
  context: string = '';
  notes: string = '';
}
