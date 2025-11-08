export class CreateSiteRequest {
  uuid: string = '';
  name: string = '';
}

export interface SitesResponseCollection {
  uuid: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
