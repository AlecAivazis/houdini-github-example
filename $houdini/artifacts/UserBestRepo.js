export default {
    name: "UserBestRepo",
    kind: "HoudiniQuery",
    hash: "63b4b89e87e6dcb9f9975848803e888d491e0bd9f4ee12ee43ff43a573d14158",

    raw: `query UserBestRepo($login: String!) {
  user(login: $login) {
    ...GhImg_user
    login
    repositories(
      orderBy: {field: STARGAZERS, direction: DESC}
      first: 1
      isFork: false
      ownerAffiliations: OWNER
    ) {
      nodes {
        id
        name
        description
        ...GhRepoLanguages_repo
        ...GhStar_repo
      }
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

fragment GhRepoLanguages_repo on Repository {
  languages(first: 2, orderBy: {field: SIZE, direction: DESC}) {
    totalCount
    edges {
      node {
        color
        id
        name
      }
      size
    }
    totalSize
  }
}

fragment GhStar_repo on Repository {
  id
  stargazers {
    totalCount
  }
  viewerHasStarred
}
`,

    rootType: "Query",

    selection: {
        user: {
            type: "User",
            keyRaw: "user(login: $login)",
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
                },

                repositories: {
                    type: "RepositoryConnection",
                    keyRaw: "repositories(orderBy: {field: STARGAZERS, direction: DESC}, first: 1, isFork: false, ownerAffiliations: OWNER)",

                    fields: {
                        nodes: {
                            type: "Repository",
                            keyRaw: "nodes",
                            nullable: true,

                            fields: {
                                id: {
                                    type: "ID",
                                    keyRaw: "id"
                                },

                                name: {
                                    type: "String",
                                    keyRaw: "name"
                                },

                                description: {
                                    type: "String",
                                    keyRaw: "description",
                                    nullable: true
                                },

                                languages: {
                                    type: "LanguageConnection",
                                    keyRaw: "languages(first: 2, orderBy: {field: SIZE, direction: DESC})",
                                    nullable: true,

                                    fields: {
                                        totalCount: {
                                            type: "Int",
                                            keyRaw: "totalCount"
                                        },

                                        edges: {
                                            type: "LanguageEdge",
                                            keyRaw: "edges",
                                            nullable: true,

                                            fields: {
                                                node: {
                                                    type: "Language",
                                                    keyRaw: "node",

                                                    fields: {
                                                        color: {
                                                            type: "String",
                                                            keyRaw: "color",
                                                            nullable: true
                                                        },

                                                        id: {
                                                            type: "ID",
                                                            keyRaw: "id"
                                                        },

                                                        name: {
                                                            type: "String",
                                                            keyRaw: "name"
                                                        }
                                                    }
                                                },

                                                size: {
                                                    type: "Int",
                                                    keyRaw: "size"
                                                }
                                            }
                                        },

                                        totalSize: {
                                            type: "Int",
                                            keyRaw: "totalSize"
                                        }
                                    }
                                },

                                stargazers: {
                                    type: "StargazerConnection",
                                    keyRaw: "stargazers",

                                    fields: {
                                        totalCount: {
                                            type: "Int",
                                            keyRaw: "totalCount"
                                        }
                                    }
                                },

                                viewerHasStarred: {
                                    type: "Boolean",
                                    keyRaw: "viewerHasStarred"
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    input: {
        fields: {
            login: "String"
        },

        types: {}
    },

    policy: "CacheOrNetwork"
};