export type RemoveStar = {
    readonly "input": RemoveStar$input,
    readonly "result": RemoveStar$result | undefined
};

export type RemoveStar$result = {
    readonly removeStar: {
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

export type RemoveStar$afterLoad = {
    readonly "data": {
        readonly "RemoveStar": RemoveStar$result
    }
};

export type RemoveStar$input = {
    id: string
};