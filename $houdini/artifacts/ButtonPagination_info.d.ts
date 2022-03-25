export type ButtonPagination_info = {
    readonly "shape"?: ButtonPagination_info$data,
    readonly "$fragments": {
        "ButtonPagination_info": true
    }
};

export type ButtonPagination_info$data = {
    readonly startCursor: string | null,
    readonly hasPreviousPage: boolean,
    readonly hasNextPage: boolean,
    readonly endCursor: string | null
};