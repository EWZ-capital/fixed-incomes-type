export const ProductNameValues = [
  "LCI",
  "LCA",
  "LC",
  "CDB",
  "LIG",
  "DEB",
  "CRI",
  "CRA",
  "CFF",
  "LFSN",
  "LFSC",
  "LFG",
  "LTEL",
  "LF",
  "Poupança",
  "COE",
  "LFT",
  "LTN",
  "NTN-F",
  "NTN-B",
  "NTN-B Principal",
  "Tesouro Renda+"
] as const;

export type ProductName = typeof ProductNameValues[number];

export const IndexTypeValues = [
  "Pré-fixado",
  "Pós-fixado",
  "Híbrido",
  "COE",
  "CFF"
] as const;
export type IndexType = typeof IndexTypeValues[number];

export const MicroClassTypeValues = [
  "Poupança",
  "Pré-fixado",
  "Juros",
  "Inflação",
  "COE",
  "CFF",
  "Indefinido"
] as const;
export type MicroClassType = typeof MicroClassTypeValues[number];

export const IssuerTypeValues = [
  "Emissão Bancária",
  "Crédito Privado",
  "Tesouro Direto",
  "Indefinido"
] as const;
export type IssuerType = typeof IssuerTypeValues[number];

export const OriginTypeValues = [
  "B3",
  "Client",
  "B3_Client"
] as const;
export type OriginType = typeof OriginTypeValues[number];

export const StrategyTypeValues = [
  "Rentabilidade",
  "Caixa",
  "Reserva"
] as const;
export type StrategyType = typeof StrategyTypeValues[number];

export const BenchmarkTypeValues = [
  "Pré-fixado",
  "CDI",
  "Selic",
  "IPCA",
  "IGPM",
  "COE",
  "CFF"
] as const;
export type BenchmarkType = typeof BenchmarkTypeValues[number];

export const FreeTaxInputValues = [
  "Sim",
  "Não",
  "Não sei"
] as const;
export type FreeTaxInput = typeof FreeTaxInputValues[number];

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
