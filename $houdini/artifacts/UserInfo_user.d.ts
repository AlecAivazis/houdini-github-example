export type UserInfo_user = {
    readonly "shape"?: UserInfo_user$data,
    readonly "$fragments": {
        "UserInfo_user": true
    }
};

export type UserInfo_user$data = {
    readonly id: string,
    readonly login: string,
    readonly avatarUrl: string,
    readonly name: string | null
};