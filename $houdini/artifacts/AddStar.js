export default {
    name: "AddStar",
    kind: "HoudiniMutation",
    hash: "f91c2046b40bd609ecb0377b332aefb94f16874ab9508af5b9d990fab533bbcc",

    raw: `mutation AddStar($id: ID!) {
  addStar(input: {starrableId: $id}) {
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
        addStar: {
            type: "AddStarPayload",
            keyRaw: "addStar(input: {starrableId: $id})",
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