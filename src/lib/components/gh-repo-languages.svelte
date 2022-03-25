<script lang="ts">
    import { fragment, graphql, GhRepoLanguages_repo } from '$houdini';

	export let repo: GhRepoLanguages_repo;

    const data = fragment(graphql`
        fragment GhRepoLanguages_repo on Repository {
            languages(first: 2, orderBy: { field: SIZE, direction: DESC }) {
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
    `, repo)


	function getPourcent(nodeSize: number) {
		return ((nodeSize * 100) / $data.languages.totalSize).toFixed();
	}
</script>

<div class="line">
	{#each $data.languages.edges as edge}
		<div
			title={`${edge.node.name} (${getPourcent(edge.size)}%)`}
			style={`background-color: ${edge.node.color}; height: 7px; width: ${getPourcent(
				edge.size
			)}%;`}
		/>
	{/each}
</div>

<style>
	.line {
		display: flex;
		background-color: #fff;
		cursor: pointer;
	}
</style>
