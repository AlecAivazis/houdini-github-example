export type AddStar = {
    readonly "input": AddStar$input,
    readonly "result": AddStar$result | undefined
};

export type AddStar$result = {
    readonly addStar: {
        readonly starrable: {
            readonly id: string,
            readonly __typename: string | null,
            readonly stargazers: {
                readonly totalCount: number
            },
            readonly viewerHasStarred: boolean
        } | null
    } | null
};

export type AddStar$afterLoad = {
    readonly "data": {
        readonly "AddStar": AddStar$result
    }
};

export type AddStar$input = {
    id: string
};