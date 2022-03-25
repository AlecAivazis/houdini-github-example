export default {
    name: "Me",
    kind: "HoudiniQuery",
    hash: "e0b5999f9a7dc4f0281625f85097bde51faed4a911def0d857c416f7a7458226",

    raw: `query Me {
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