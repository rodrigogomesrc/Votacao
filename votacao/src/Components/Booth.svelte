<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    export let options = []
</script>

{#each options as option}
<button on:click={()=>dispatch('vote', option.text)}>{option.text}</button>
{/each}