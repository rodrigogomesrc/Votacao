<template>
    <div>
        <booth v-if="localState==='open'" :options="localOptions" v-on:vote="handleVote($event)"/>
        <results v-if="localState!=='open'" :options="localOptions"/>
    </div>
</template>

<script>
    import Results from './Results.vue';
    import Booth from './Booth.vue';

    export default {
        name: 'voting-card',
        props: {
            options: [],
            state: ""
        },
        components: {
            Results,
            Booth
        },
        data(){
            return {
               localState: this.state,
               localOptions: this.options
            }
        }, 
        methods: {
            handleVote(option){
                this.localState = "closed"
                this.localOptions.forEach(op => {
                    if(op.text === option){
                        op.count++;
                    }
                });
            }
        },
        watch: {
            state: function(){
                this.localState = this.state;
            },
            options: function(){
                this.localOptions = this.options;
            }
        }
    }
</script>