<script>
    import Results from './Results.svelte';
    import Booth from './Booth.svelte';
    import { formOptions, formTitle } from '../stores/formData';

    export let title = "";
    export let options = [];
    export let state = "";

    const onVote = (data) => {
        countVote(data.detail);
        state = "closed"
    }

    const countVote = (vote) => {
        let localOptions = [...options];
        localOptions.forEach(option => {
            if(option.text === vote){
                option.count++;
            }
        })
        options = localOptions;
    }

</script>

<h3>{title}</h3>
{#if state === "open"}
<Booth options={options} on:vote={onVote}/>
{/if}
{#if state !== "open"}
<Results options={options}/>
{/if}