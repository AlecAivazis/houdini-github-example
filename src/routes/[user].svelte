
<script lang="ts">
    import { query, graphql, UserBestRepo, mutation} from '$houdini'
	import html2canvas from 'html2canvas';
    import GhImg from '$lib/components/gh-img.svelte';
    import GhStar from '$lib/components/gh-star.svelte'
    import GhRepoLanguages from '$lib/components/gh-repo-languages.svelte'

    const { data, partial } = query<UserBestRepo>(graphql`
        query UserBestRepo($login: String!) @cache(policy: CacheOrNetwork) {
            user(login: $login) {
                ...GhImg_user
                login
                repositories(
                    orderBy: { field: STARGAZERS, direction: DESC }
                    first: 1
                    isFork: false
                    ownerAffiliations: OWNER
                ) {
                    nodes {
                        id
                        name
                        description

                        ...GhRepoLanguages_repo

                        ...GhStar_repo
                    }
                }
            }
        }
    `)

	async function dl() {
		const canvas = await html2canvas(document.querySelector('#card'), {
			backgroundColor: null,
			allowTaint: true,
			useCORS: true,
			logging: true
		});
		canvas.style.display = 'none';
		document.body.appendChild(canvas);
		const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
		const a = document.createElement('a');
		a.setAttribute('download', `gh-template.png`);
		a.setAttribute('href', image);
		a.click();
	}

</script>

<script context="module">
    export function UserBestRepoVariables({params}) {
       return { 
           login: params.user
       } 
    }
</script>

<div id="card" class="card">
    <div class="container">
        <div class="row">
            <a
                style="color: inherit;text-decoration: inherit;"
                target="_blanck"
                href={`https://github.com/${$data.user?.login}/${$data.user?.repositories.nodes[0].name}`}
                >{$data.user?.login} / <b>{$data.user?.repositories.nodes[0].name}</b></a
            >
            <div>
                <GhImg user={$data.user} />
            </div>
        </div>
        <div class="desc">
            {$data.user?.repositories.nodes[0].description ?? 'No description'}
        </div>
        <div class="row">
            <GhStar
                repo={$data.user?.repositories.nodes[0]}
            />
        </div>

        <GhRepoLanguages repo={$data.user?.repositories.nodes[0]} />
    </div>
</div>

<div class="dlBtn">
	<button on:click={dl}>Download</button>
</div>

<style>
	.container {
		height: 250px;
		padding: 30px 40px 40px 40px;
	}

	.desc {
		font-style: italic;
		font-size: small;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	.dlBtn {
		margin-top: 40px;
		text-align: center;
		width: 100%;
	}

	.row {
		height: 45%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 40px;
	}

	.card {
		margin: 0px auto 0px auto;
		width: 640px;
		height: 320px;
		border-radius: 15px;
		background-color: #babbbd;
		color: #0d1117;
		font-size: xx-large;
		font-family: 'Courier New', Courier, monospace;
		box-shadow: rgba(186, 187, 189, 0.4) 0px 2px 4px, rgba(186, 187, 189, 0.3) 0px 7px 13px -3px,
			rgba(186, 187, 189, 0.2) 0px -3px 0px inset;
	}
</style>