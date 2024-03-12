export interface IAsset {
    assetID: number;
    assetName: string | null;
    assetCategoryID: number | null;
    assetModel: string | null;
    assetSpecifications: string | null;
    assetImageURL: string | null;
    assetImageFilename: string | null;
    assetDescription: string | null;
    assetStatus: string | null;
    manufacturingDate: Date | null;
    expiryDate: Date | null;
    assetValue: number | null;
}

export class Asset {
    assetID: number | null;
    assetName: string | null;
    assetCategoryID: number | null;
    assetModel: string | null;
    assetSpecifications: string | null;
    assetImage: string | null;
    assetDescription: string | null;
    assetStatus: string | null;
    manufacturingDate: Date | null;
    expiryDate: Date | null;
    assetValue: number | null;

    constructor() {
        this.assetID = 0;
        this.assetName = null;
        this.assetCategoryID = null;
        this.assetModel = null;
        this.assetSpecifications = null;
        this.assetImage = null;
        this.assetDescription = null;
        this.assetStatus = null;
        this.manufacturingDate = null;
        this.expiryDate = null;
        this.assetValue = null;
    }
}