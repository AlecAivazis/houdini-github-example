<script lang="ts">
    import { fragment, graphql, ButtonPagination_info } from '$houdini';

	import { createEventDispatcher } from 'svelte';

	export let type: 'before' | 'after' = 'before';
	export let info: ButtonPagination_info;

    const paginationInfo = fragment(graphql`
        fragment ButtonPagination_info on PageInfo { 
            startCursor
            hasPreviousPage
            hasNextPage
            endCursor
        }
    `, info)


	const dispatch = createEventDispatcher();

	function dispatchPaginate(data: {last?: number, before?: string, after?: string, first?: number}) {
		dispatch('paginate', data);
	}

	function before() {
		dispatchPaginate({ 
			last: 5, 
			before: $paginationInfo.startCursor,
			first: null, 
			after: null, 
		});
	}

	function after() {
		dispatchPaginate({ 
			first: 5, 
			after: $paginationInfo.endCursor,
			last: null, 
			before: null
		});
	}
</script>

{#if $paginationInfo && type === 'before'}
	<button on:click={before} disabled={!$paginationInfo.hasPreviousPage}>before</button>
{/if}
{#if $paginationInfo && type === 'after'}
	<button on:click={after} disabled={!$paginationInfo.hasNextPage}>after</button>
{/if}
