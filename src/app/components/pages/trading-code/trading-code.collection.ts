export interface TradingCodeResponseCollection {
  uuid: string;
  symbol: string;
  company_name: string;
  createdAt: string;
  updatedAt: string;
}

export class CreateTradingCodeRequest {
  uuid: string = '';
  symbol: string = '';
  company_name: string = '';
}