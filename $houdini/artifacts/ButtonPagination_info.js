export default {
    name: "ButtonPagination_info",
    kind: "HoudiniFragment",
    hash: "ed760f99d80497a363282dc3ab03e5379bc538b17bbb626016854f7482c4ed85",

    raw: `fragment ButtonPagination_info on PageInfo {
  startCursor
  hasPreviousPage
  hasNextPage
  endCursor
}
`,

    rootType: "PageInfo",

    selection: {
        startCursor: {
            type: "String",
            keyRaw: "startCursor"
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
            keyRaw: "endCursor"
        }
    }
};