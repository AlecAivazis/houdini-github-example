<script lang="ts">
    import { graphql, fragment, GhImg_user } from '$houdini'

    export let user: GhImg_user

    const data = fragment(graphql`
        fragment GhImg_user on User { 
                id
                login
                avatarUrl
                name
        }
    `, user
    )
</script>


<a href={`/${$data.login}`}>
    <img
        height="77px"
        width="77px"
        style="border-radius: 14px"
        src={$data.avatarUrl}
        alt={`Profile pic of ${$data.name}!`}
    />
</a>