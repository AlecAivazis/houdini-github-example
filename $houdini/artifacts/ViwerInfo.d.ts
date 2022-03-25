export type ViwerInfo = {
    readonly "input": null,
    readonly "result": ViwerInfo$result | undefined
};

export type ViwerInfo$result = {
    readonly viewer: {
        readonly login: string
    }
};