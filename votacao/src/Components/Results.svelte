<script>
    import { onMount } from 'svelte';
    import { formOptions } from '../stores/formData';

    let localOptions;

    formOptions.subscribe(data => {
        localOptions = data;
    }) 

    let results = [];
    let totalVotes = 0;

    onMount(async () => {
        loadResults();
	});

    const loadResults = () => {
        countVotes();
        localOptions.forEach((option, index) => {
            results = [...results, renderResult(option, index)]
        })
    }

    const renderResult = (option, index) => {
        return `${index + 1}. ${option.text} - ${option.count} votes (${calculatePercentage(option.count)}%)`
    }

    const calculatePercentage = (optionCount) => {
        return Math.round((optionCount / totalVotes) * 100)
    }

    const countVotes = () => {
        localOptions.forEach(option => {
            totalVotes += option.count;
        });
    }

</script>

{#each results as result}
<p>{result}</p>
{/each}