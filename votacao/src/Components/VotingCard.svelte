<script>
    import Results from './Results.svelte';
    import Booth from './Booth.svelte';
    import { formOptions, formTitle } from '../stores/formData';
    import { votingState } from '../stores/states';

    let state;
    let title;
    let options;

    formTitle.subscribe(savedTitle => {
        title = savedTitle;
    })

    votingState.subscribe(savedState => {
        state = savedState;
    })

    formOptions.subscribe(savedOptions => {
        options = savedOptions;
    })

</script>

<h3>{title}</h3>
{#if state === "open"}
<Booth/>
{/if}
{#if state !== "open"}
<Results/>
{/if}