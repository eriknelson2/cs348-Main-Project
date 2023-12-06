<script>
    export let data;

    // Extract documents array from the data
    // @ts-ignore
    const { documents } = data.focusSessions;

    // Assuming documents is an array
    let focusSessions = documents || [];

</script>

<h1>Sessions</h1>

{#each focusSessions as session}
    <h2>{session.title}</h2>
{/each}
<div class = "flex flex-col items-center justify-center h-screen background">
    <h1>
        Sessions will be listed here
    </h1>
</div>
