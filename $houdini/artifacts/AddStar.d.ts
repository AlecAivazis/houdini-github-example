export type AddStar = {
    readonly "input": AddStar$input,
    readonly "result": AddStar$result | undefined
};

export type AddStar$result = {
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

export type AddStar$input = {
    id: string
};