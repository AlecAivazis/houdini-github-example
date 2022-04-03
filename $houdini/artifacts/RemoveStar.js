export default {
    name: "RemoveStar",
    kind: "HoudiniMutation",
    hash: "93ecb5d739710d68e090302a0f3b3af9029c7cf7a2b2322e368234b31dece6ce",

    raw: `mutation RemoveStar($id: ID!) {
  removeStar(input: {starrableId: $id}) {
    starrable {
      id
      __typename
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
            keyRaw: "removeStar(input: {starrableId: $id})",
            nullable: true,

            fields: {
                starrable: {
                    type: "Starrable",
                    keyRaw: "starrable",
                    nullable: true,

                    fields: {
                        id: {
                            type: "ID",
                            keyRaw: "id"
                        },

                        __typename: {
                            type: "String",
                            keyRaw: "__typename"
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