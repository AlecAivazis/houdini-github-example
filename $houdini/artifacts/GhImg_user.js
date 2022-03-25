export default {
    name: "GhImg_user",
    kind: "HoudiniFragment",
    hash: "8e7d2c651b7b766bf006c738fa958075c1d2bc96bb20952d9dcf109bf069051e",

    raw: `fragment GhImg_user on User {
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
            keyRaw: "name"
        }
    }
};