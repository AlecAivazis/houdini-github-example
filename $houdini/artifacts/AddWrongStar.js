export default {
    name: "AddWrongStar",
    kind: "HoudiniMutation",
    hash: "e405318124f302b372a8e5f662ea742b5b24d9d954736e4cba23cc539f544d81",

    raw: `mutation AddWrongStar($id: ID!) {
  addStar(input: {starrableId: $id}) {
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
            keyRaw: "addStar(input: {starrableId: $id})",
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