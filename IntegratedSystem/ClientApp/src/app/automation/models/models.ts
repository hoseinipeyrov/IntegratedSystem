
export interface IContact{
    Id: number;
    Name: string;
}

export interface IListItem{
    Value: string;
    Text: string;
    Selected: boolean;
}

export interface IReceivers {
    To: { name: string, id: number }[];
    CarbonCopy: { name: string, id: number }[];
    BlindCarbonCopy: { name: string, id: number }[];
}

export enum RecieverDialogType {
    To = 0,
    Cc = 1,
    Bcc = 2
}