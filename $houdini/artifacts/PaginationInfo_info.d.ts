export type PaginationInfo_info = {
    readonly "shape"?: PaginationInfo_info$data,
    readonly "$fragments": {
        "PaginationInfo_info": true
    }
};

export type PaginationInfo_info$data = {
    readonly startCursor: string | null,
    readonly hasPreviousPage: boolean,
    readonly hasNextPage: boolean,
    readonly endCursor: string | null
};