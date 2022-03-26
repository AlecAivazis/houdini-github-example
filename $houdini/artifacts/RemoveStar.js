export default {
    name: "RemoveStar",
    kind: "HoudiniMutation",
    hash: "6cdc53e7c0ae0b92bf413cfa9ad10e2e8886c1ab8d9d566f3690d51feb24e0b5",

    raw: `mutation RemoveStar($id: ID!) {
  removeStar(input: {starrableId: $id, clientMutationId: "From KitQL"}) {
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
        removeStar: {
            type: "RemoveStarPayload",
            keyRaw: "removeStar(input: {starrableId: $id, clientMutationId: \"From KitQL\"})",
            nullable: true,

            fields: {
                clientMutationId: {
                    type: "String",
                    keyRaw: "clientMutationId",
                    nullable: true
                },

                starrable: {
                    type: "Starrable",
                    keyRaw: "starrable",
                    nullable: true,

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