export default {
    name: "AboutQuery",
    kind: "HoudiniQuery",
    hash: "3898af13665183d7f88a4ffa557b1284d28267367ff4b4068fe2125cfea8ee23",

    raw: `query AboutQuery($first: Int, $after: String, $last: Int, $before: String) {
  viewer {
    ...GhImg_user
    followers(first: $first, after: $after, last: $last, before: $before) {
      edges {
        node {
          ...GhImg_user
          id
        }
      }
      pageInfo {
        ...ButtonPagination_info
      }
      totalCount
    }
    id
  }
}

fragment GhImg_user on User {
  id
  login
  avatarUrl
  name
}

fragment ButtonPagination_info on PageInfo {
  startCursor
  hasPreviousPage
  hasNextPage
  endCursor
}
`,

    rootType: "Query",

    selection: {
        viewer: {
            type: "User",
            keyRaw: "viewer",

            fields: {
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
                },

                followers: {
                    type: "FollowerConnection",
                    keyRaw: "followers(first: $first, after: $after, last: $last, before: $before)",

                    fields: {
                        edges: {
                            type: "UserEdge",
                            keyRaw: "edges",
                            nullable: true,

                            fields: {
                                node: {
                                    type: "User",
                                    keyRaw: "node",
                                    nullable: true,

                                    fields: {
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
                                }
                            }
                        },

                        pageInfo: {
                            type: "PageInfo",
                            keyRaw: "pageInfo",

                            fields: {
                                startCursor: {
                                    type: "String",
                                    keyRaw: "startCursor",
                                    nullable: true
                                },

                                hasPreviousPage: {
                                    type: "Boolean",
                                    keyRaw: "hasPreviousPage"
                                },

                                hasNextPage: {
                                    type: "Boolean",
                                    keyRaw: "hasNextPage"
                                },

                                endCursor: {
                                    type: "String",
                                    keyRaw: "endCursor",
                                    nullable: true
                                }
                            }
                        },

                        totalCount: {
                            type: "Int",
                            keyRaw: "totalCount"
                        }
                    }
                }
            }
        }
    },

    input: {
        fields: {
            first: "Int",
            after: "String",
            last: "Int",
            before: "String"
        },

        types: {}
    },

    policy: "CacheOrNetwork"
};