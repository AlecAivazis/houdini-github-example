export type UserBestRepo = {
    readonly "input": UserBestRepo$input,
    readonly "result": UserBestRepo$result | undefined
};

export type UserBestRepo$result = {
    readonly user: {
        readonly login: string,
        readonly repositories: {
            readonly nodes: ({
                readonly id: string,
                readonly name: string,
                readonly description: string | null,
                readonly $fragments: {
                    GhRepoLanguages_repo: true,
                    GhStar_repo: true
                }
            } | null)[] | null
        },
        readonly $fragments: {
            GhImg_user: true
        }
    } | null
};

export type UserBestRepo$afterLoad = {
    readonly "data": {
        readonly "UserBestRepo": UserBestRepo$result
    }
};

export type UserBestRepo$input = {
    login: string
};