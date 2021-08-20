<template>
    <div>
        <p v-for="option in results" :key="option">{{option}}</p>  
    </div>  
</template>

<script>

    import useStore from '../store';

    export default {
        name: 'results',
        data(){
            return {
                totalVotes: 0,
                results: [],
                options: []
            }
        }, 
        methods: {
            loadResults(){
                this.countVotes();
                this.options.forEach((option, index) => {
                    this.results.push(this.renderResult(option, index))
                })
            },
            countVotes(){
                this.options.forEach(option => {
                    this.totalVotes += option.count;
                });
            },
            calculatePercentage(optionCount){
                return Math.round((optionCount / this.totalVotes) * 100)
            },
            renderResult(option, index){
                return `${index + 1}. ${option.text} - ${option.count} votes 
                (${this.calculatePercentage(option.count)}%)`
            }
        }, 
        mounted(){
            const store = useStore();
            this.options = store.formOptions;
            this.loadResults();
        }
    }
</script>