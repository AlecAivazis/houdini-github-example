export type RemoveStar = {
    readonly "input": RemoveStar$input,
    readonly "result": RemoveStar$result | undefined
};

export type RemoveStar$result = {
    readonly removeStar: {
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

export type RemoveStar$input = {
    id: string
};