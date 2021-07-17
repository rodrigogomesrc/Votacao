<template>
    <div>
        <p v-for="option in results" :key="option">{{option}}</p>  
    </div>  
</template>

<script>
    export default {
        name: 'results',
        props: {
            options: []
        }, 
        data(){
            return {
                totalVotes: 0,
                results: []
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

        }, mounted(){
            this.loadResults();
        }
    }
</script>