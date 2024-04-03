export interface KnightRequestModel {
    name: string;
}

export interface KnightResponseModel {
    id: string;
    name: string;
    nickname: string;
    birthday: string;
    weapons: Array<Object>;
    attributes: Object;
    keyAttribute: string;
}