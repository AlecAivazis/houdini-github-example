export default {
    name: "PaginationInfo_info",
    kind: "HoudiniFragment",
    hash: "a9ee8d7d530e1cf282ed50dbeb6e431f49497596806fcc0bcbfd51df3109aff3",

    raw: `fragment PaginationInfo_info on PageInfo {
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
};