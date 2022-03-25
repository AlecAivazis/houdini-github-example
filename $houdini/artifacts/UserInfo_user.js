export default {
    name: "UserInfo_user",
    kind: "HoudiniFragment",
    hash: "b244a1690073ee18e41e09c2f1df8797704d42d50eb9a7b79e3fe67905e91b89",

    raw: `fragment UserInfo_user on User {
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