<script lang="ts">
    import { query, graphql, AboutQuery } from "$houdini";
    import GhImg  from '$lib/components/gh-img.svelte'
    import ButtonPagination  from '$lib/components/button-pagination.svelte'

    const { data, refetch, loading } = query<AboutQuery>(graphql`
        query AboutQuery($first: Int = 5, $after: String, $last: Int, $before: String)
            @cache(policy: CacheOrNetwork) 
            { 
            viewer { 
                ...GhImg_user
                
                followers(first: $first, after: $after, last: $last, before: $before) {
                    edges {
                        node {
                            ...GhImg_user
                        }
                    }
                
                    pageInfo { 
                        ...ButtonPagination_info
                    }

                    totalCount
                }
            }
        }
    `)

</script>

<script context="module">
    export function AboutQueryVariables() {
        return {
            first: 5
        }
    }
</script>

<!-- Me infos -->
<div class="row">Me 👇</div>
<div class="row">
    <GhImg user={$data.viewer} />
</div>


<div class="row">Followers ({$data.viewer.followers.totalCount}) 👇</div>
<div class="row">
	<ButtonPagination
		type="before"
		info={$data?.viewer.followers.pageInfo}
		on:paginate={(args) => refetch(args.detail)}
	/>

	{#if $loading}
		Loading...
	{:else}
        {#each $data?.viewer.followers.edges ?? [] as edge}
            <GhImg user={edge.node} />
        {/each}
    {/if}

	<ButtonPagination
		type="after"
		info={$data?.viewer.followers.pageInfo}
		on:paginate={(args) => refetch(args.detail)}
	/>
</div>

   
<style>
	.row {
		margin-top: 40px;
		margin-bottom: 40px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}
</style>
 