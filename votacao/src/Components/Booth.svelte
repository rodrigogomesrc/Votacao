<script>
    export let options = []
</script>

{#each options as option}
<button>{option.text}</button>
{/each}