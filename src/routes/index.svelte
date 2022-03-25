<script lang="ts">
    import { query, graphql, AboutQuery } from "$houdini";
    import GhImg  from '$lib/components/gh-img.svelte'
    import ButtonPagination  from '$lib/components/button-pagination.svelte'

    const { data, refetch } = query<AboutQuery>(graphql`
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

<h2>About page</h2>

<p>Want to know more about KitQL?</p>

<p>Go to check the doc: <a href="https://kitql.vercel.app/">https://kitql.vercel.app/</a></p>

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

    {#each $data?.viewer.followers.edges ?? [] as edge}
        <GhImg user={edge.node} />
    {/each}

	<ButtonPagination
		type="after"
		info={$data?.viewer.followers.pageInfo}
		on:paginate={(args) => refetch(args.detail)}
	/>
</div>

    