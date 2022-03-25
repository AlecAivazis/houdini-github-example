<script>
    import { query, graphql } from '$houdini'

    const { data } = query(graphql`
        query ViwerInfo { viewer { login }}
    `)
</script>

{$data.viewer.login}