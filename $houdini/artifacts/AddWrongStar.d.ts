export type AddWrongStar = {
    readonly "input": AddWrongStar$input,
    readonly "result": AddWrongStar$result | undefined
};

export type AddWrongStar$result = {
    readonly addStar: {
        readonly clientMutationId: string | null,
        readonly starrable: {
            readonly id: string,
            readonly stargazers: {
                readonly totalCount: number
            },
            readonly viewerHasStarred: boolean
        } | null
    } | null
};

export type AddWrongStar$afterLoad = {
    readonly "data": {
        readonly "AddWrongStar": AddWrongStar$result
    }
};

export type AddWrongStar$input = {
    id: string
};