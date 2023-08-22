export type ProductName =
  | "LCI"
  | "LCA"
  | "LC"
  | "CDB"
  | "LIG"
  | "DEB"
  | "CRI"
  | "CRA"
  | "CFF"
  | "LFSN"
  | "LFSC"
  | "LFG"
  | "LTEL"
  | "LF"
  | "Poupança"
  | "COE"
  | "LFT"
  | "LTN"
  | "NTN-F"
  | "NTN-B"
  | "NTN-B Principal"
  | "Tesouro Renda+";

export type IndexType = "Pré-fixado" | "Pós-fixado" | "Híbrido" | "COE" | "CFF" ;

export type MicroClassType =
  | "Poupança"
  | "Pré-fixado"
  | "Juros"
  | "Inflação"
  | "COE"
  | "CFF"
  | "Indefinido";

export type IssuerType =
  | "Emissão Bancária"
  | "Crédito Privado"
  | "Tesouro Direto"
  | "Indefinido";

export type OriginType = "B3" | "Client" | "B3_Client";

export type StrategyType = "Rentabilidade" | "Caixa" | "Reserva";

export type BenchmarkType = "Pré-fixado" | "CDI" | "Selic" | "IPCA" | "IGPM" | "COE" | "CFF";

export interface IFixedIncomes {
  id: string;
  tickerSymbol: string;
  productName: ProductName;
  corporationName: string;
  participantDocumentNumber: string
  issueDate?: Date
  expirationDate: Date
  fixedIncomeQuantity: string
  initialUnitValue: string
  indexType: IndexType
  microClass: MicroClassType
  issuerType: IssuerType
  origin: OriginType
  strategy: StrategyType
  rate: string
  nickname: string
  taxFree: boolean
  benchmark: BenchmarkType
  initialValue: string
  grossValue: string
  netValue: string
  anualProfit?: string
  totalProfit: string
  totalNetProfit: string
  assetIndex?: string
  anualNetProfit?: string
  rentNetProfit?: string
  rentProfit?: string
  updated_at: Date
  created_at: Date;
}
