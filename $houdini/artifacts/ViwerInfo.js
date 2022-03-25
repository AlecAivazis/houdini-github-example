export default {
    name: "ViwerInfo",
    kind: "HoudiniQuery",
    hash: "2f25d9b5f424665db11d3df8f8cf925e3065d7b0e966ec014e8ae42e409ab90f",

    raw: `query ViwerInfo {
  viewer {
    login
    id
  }
}
`,

    rootType: "Query",

    selection: {
        viewer: {
            type: "User",
            keyRaw: "viewer",

            fields: {
                login: {
                    type: "String",
                    keyRaw: "login"
                },

                id: {
                    type: "ID",
                    keyRaw: "id"
                }
            }
        }
    },

    policy: "NetworkOnly"
};