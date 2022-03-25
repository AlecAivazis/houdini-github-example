export type GhRepoLanguages_repo = {
    readonly "shape"?: GhRepoLanguages_repo$data,
    readonly "$fragments": {
        "GhRepoLanguages_repo": true
    }
};

export type GhRepoLanguages_repo$data = {
    readonly languages: {
        readonly totalCount: number,
        readonly edges: ({
            readonly node: {
                readonly color: string | null,
                readonly id: string,
                readonly name: string
            },
            readonly size: number
        } | null)[] | null,
        readonly totalSize: number
    } | null
};