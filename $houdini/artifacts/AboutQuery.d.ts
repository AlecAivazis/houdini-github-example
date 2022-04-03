export type AboutQuery = {
    readonly "input": AboutQuery$input,
    readonly "result": AboutQuery$result | undefined
};

export type AboutQuery$result = {
    readonly viewer: {
        readonly followers: {
            readonly edges: ({
                readonly node: {
                    readonly $fragments: {
                        GhImg_user: true
                    }
                } | null
            } | null)[] | null,
            readonly pageInfo: {
                readonly $fragments: {
                    ButtonPagination_info: true
                }
            },
            readonly totalCount: number
        },
        readonly $fragments: {
            GhImg_user: true
        }
    }
};

export type AboutQuery$afterLoad = {
    readonly "data": {
        readonly "AboutQuery": AboutQuery$result
    }
};

export type AboutQuery$input = {
    first?: number | null | undefined,
    after?: string | null | undefined,
    last?: number | null | undefined,
    before?: string | null | undefined
};