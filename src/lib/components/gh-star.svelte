<script lang="ts">
    import { fragment, graphql, GhStar_repo, mutation } from '$houdini';
	import LogoStar from './logo-star.svelte';

	export let repo: GhStar_repo ;

    const data = fragment(graphql`
        fragment GhStar_repo on Repository { 
            id
            stargazers {
                totalCount
            }
            viewerHasStarred
        }
    `, repo)

    const addStar = mutation(graphql`
        mutation AddStar($id: ID!) {
            addStar(input: { starrableId: $id, clientMutationId: "From KitQL" }) {
                clientMutationId
                starrable {
                    id
                    stargazers {
                        totalCount
                    }
                    viewerHasStarred
                }
            }
        }
    `)
    
    const removeStar = mutation(graphql`
        mutation RemoveStar($id: ID!) {
            removeStar(input: { starrableId: $id, clientMutationId: "From KitQL" }) {
                clientMutationId
                starrable {
                    id
                    stargazers {
                        totalCount
                    }
                    viewerHasStarred
                }
            }
        }
    `)
    
	async function toggle() {
		if ($data.viewerHasStarred) {
            await removeStar({id: $data.id})
        } else { 
            await addStar({id: $data.id})
        }
    }

</script>

<div class="row" on:click={toggle} >
	<LogoStar filled={$data.viewerHasStarred}  />
	<span class="number"> {$data.stargazers.totalCount ?? `Loading...`} </span>
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}

	.number {
		margin-left: 14px;
		font-size: x-large;
		font-family: 'exo medium';
		font-weight: bold;
	}
</style>
