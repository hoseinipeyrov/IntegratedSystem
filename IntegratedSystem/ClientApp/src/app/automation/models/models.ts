
export interface IContact{
    id: number;
    name: string;
}

export interface IListItem{
    value: string;
    text: string;
    selected: boolean;
}

export interface IReceivers {
    to: { name: string, id: number }[];
    carbonCopy: { name: string, id: number }[];
    blindCarbonCopy: { name: string, id: number }[];
}

export enum RecieverDialogType {
    To = 0,
    Cc = 1,
    Bcc = 2
}