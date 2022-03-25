export default {
    name: "GhRepoLanguages_repo",
    kind: "HoudiniFragment",
    hash: "0a2d36d743d594993678c57a0621f347ee4874e5d1022db98934537ceca0c825",

    raw: `fragment GhRepoLanguages_repo on Repository {
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
`,

    rootType: "Repository",

    selection: {
        languages: {
            type: "LanguageConnection",
            keyRaw: "languages(first: 2, orderBy: {field: SIZE, direction: DESC})",

            fields: {
                totalCount: {
                    type: "Int",
                    keyRaw: "totalCount"
                },

                edges: {
                    type: "LanguageEdge",
                    keyRaw: "edges",

                    fields: {
                        node: {
                            type: "Language",
                            keyRaw: "node",

                            fields: {
                                color: {
                                    type: "String",
                                    keyRaw: "color"
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
        }
    }
};