export default {
    name: "userInfo",
    kind: "HoudiniFragment",
    hash: "c48bb21d5cb336112f65ba42f7753effc03a71dfbab945d90a9d37715eea88d4",

    raw: `fragment userInfo on User {
  id
  login
  avatarUrl
  name
}
`,

    rootType: "User",

    selection: {
        id: {
            type: "ID",
            keyRaw: "id"
        },

        login: {
            type: "String",
            keyRaw: "login"
        },

        avatarUrl: {
            type: "URI",
            keyRaw: "avatarUrl"
        },

        name: {
            type: "String",
            keyRaw: "name",
            nullable: true
        }
    }
};