<script>
    import {createEventDispatcher} from 'svelte';
    import { formOptions } from '../stores/formData';
    const dispatch = createEventDispatcher();

    export let options = []

    let localOptions;

    formOptions.subscribe(data => {
        localOptions = data;
    })

</script>

{#each options as option}
<button on:click={()=>dispatch('vote', option.text)}>{option.text}</button>
{/each}