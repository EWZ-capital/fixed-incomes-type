export declare const ProductNameValues: readonly ["LCI", "LCA", "LC", "CDB", "LIG", "DEB", "CRI", "CRA", "CFF", "LFSN", "LFSC", "LFG", "LTEL", "LF", "Poupança", "COE", "LFT", "LTN", "NTN-F", "NTN-B", "NTN-B Principal", "Tesouro Renda+"];
export type ProductName = typeof ProductNameValues[number];
export declare const IndexTypeValues: readonly ["Pré-fixado", "Pós-fixado", "Híbrido", "COE", "CFF"];
export type IndexType = typeof IndexTypeValues[number];
export declare const MicroClassTypeValues: readonly ["Poupança", "Pré-fixado", "Juros", "Inflação", "COE", "CFF", "Indefinido"];
export type MicroClassType = typeof MicroClassTypeValues[number];
export declare const IssuerTypeValues: readonly ["Emissão Bancária", "Crédito Privado", "Tesouro Direto", "Indefinido"];
export type IssuerType = typeof IssuerTypeValues[number];
export declare const OriginTypeValues: readonly ["B3", "Client", "B3_Client"];
export type OriginType = typeof OriginTypeValues[number];
export declare const StrategyTypeValues: readonly ["Rentabilidade", "Caixa", "Reserva"];
export type StrategyType = typeof StrategyTypeValues[number];
export declare const BenchmarkTypeValues: readonly ["Pré-fixado", "CDI", "Selic", "IPCA", "IGPM", "COE", "CFF"];
export type BenchmarkType = typeof BenchmarkTypeValues[number];
export interface IFixedIncomes {
    id: string;
    tickerSymbol: string;
    productName: ProductName;
    corporationName: string;
    participantDocumentNumber: string;
    issueDate?: Date;
    expirationDate: Date;
    fixedIncomeQuantity: string;
    initialUnitValue: string;
    indexType: IndexType;
    microClass: MicroClassType;
    issuerType: IssuerType;
    origin: OriginType;
    strategy: StrategyType;
    rate: string;
    nickname: string;
    taxFree: boolean;
    benchmark: BenchmarkType;
    initialValue: string;
    grossValue?: string;
    netValue?: string;
    anualProfit?: string;
    totalProfit?: string;
    totalNetProfit?: string;
    assetIndex?: string;
    anualNetProfit?: string;
    rentNetProfit?: string;
    rentProfit?: string;
    updated_at: Date;
    created_at: Date;
}
