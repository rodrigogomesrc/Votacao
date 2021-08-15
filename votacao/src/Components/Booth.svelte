<script>
    import { formOptions } from '../stores/formData';
    import { votingState } from '../stores/states';

    let options;

    formOptions.subscribe(data => {
        options = data;
    })

    const onVote = (data) => {
        countVote(data);

        votingState.update(currentOptions => {
            return "closed";
        })
    }

    const countVote = (vote) => {
        let localOptions = [...options];
        localOptions.forEach(option => {
            if(option.text === vote){
                option.count++;
            }
        })
        formOptions.update(() => {
            return localOptions;
        })
    }

</script>

{#each options as option}
<button on:click={()=>onVote(option.text)}>{option.text}</button>
{/each}