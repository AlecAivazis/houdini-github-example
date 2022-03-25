export type GhStar_repo = {
    readonly "shape"?: GhStar_repo$data,
    readonly "$fragments": {
        "GhStar_repo": true
    }
};

export type GhStar_repo$data = {
    readonly id: string,
    readonly stargazers: {
        readonly totalCount: number
    },
    readonly viewerHasStarred: boolean
};