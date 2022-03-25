export default {
    name: "AddStar",
    kind: "HoudiniMutation",
    hash: "dfd01ff2170deb40f02e6fc76a426804ae6bbc78291bb66e8e086230a4c2be29",

    raw: `mutation AddStar($id: ID!) {
  addStar(input: {starrableId: $id, clientMutationId: "From KitQL"}) {
    clientMutationId
    starrable {
      id
      stargazers {
        totalCount
      }
      viewerHasStarred
      __typename
    }
  }
}
`,

    rootType: "Mutation",

    selection: {
        addStar: {
            type: "AddStarPayload",
            keyRaw: "addStar(input: {starrableId: $id, clientMutationId: \"From KitQL\"})",

            fields: {
                clientMutationId: {
                    type: "String",
                    keyRaw: "clientMutationId"
                },

                starrable: {
                    type: "Starrable",
                    keyRaw: "starrable",

                    fields: {
                        id: {
                            type: "ID",
                            keyRaw: "id"
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
                        },

                        __typename: {
                            type: "String",
                            keyRaw: "__typename"
                        }
                    },

                    abstract: true
                }
            }
        }
    },

    input: {
        fields: {
            id: "ID"
        },

        types: {}
    }
};