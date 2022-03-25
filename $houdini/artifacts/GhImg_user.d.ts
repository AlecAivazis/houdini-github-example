export type GhImg_user = {
    readonly "shape"?: GhImg_user$data,
    readonly "$fragments": {
        "GhImg_user": true
    }
};

export type GhImg_user$data = {
    readonly id: string,
    readonly login: string,
    readonly avatarUrl: string,
    readonly name: string | null
};