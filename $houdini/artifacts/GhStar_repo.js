export default {
    name: "GhStar_repo",
    kind: "HoudiniFragment",
    hash: "a3938afed5864dae2446829b9d7b11f38014eee6b0d3d5cb7325773bee0d6dd7",

    raw: `fragment GhStar_repo on Repository {
  id
  stargazers {
    totalCount
  }
  viewerHasStarred
}
`,

    rootType: "Repository",

    selection: {
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
        }
    }
};