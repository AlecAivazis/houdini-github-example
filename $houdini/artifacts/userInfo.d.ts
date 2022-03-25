export type userInfo = {
    readonly "shape"?: userInfo$data,
    readonly "$fragments": {
        "userInfo": true
    }
};

export type userInfo$data = {
    readonly id: string,
    readonly login: string,
    readonly avatarUrl: string,
    readonly name: string | null
};