<template>
    <div>
        <h3>{{title}}</h3>
        <booth v-if="localState==='open'"  v-on:vote="handleVote($event)"/>
        <results v-if="localState!=='open'"/>
    </div>
</template>

<script>
    import Results from './Results.vue';
    import Booth from './Booth.vue';
    import useStore, {setOptions, setVotingState} from '../store';
    export default {
        name: 'voting-card',
        components: {
            Results,
            Booth
        },
        data(){
            return {
               localState: "open",
               localOptions: [],
               title: "",
               store: null
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
                setOptions(this.localOptions);
                setVotingState("closed");
            }
        },
        watch: {
            store: function(){
                this.localOptions = this.store.formOptions;
                this.title = this.store.formTitle;
            }
        }, 
        mounted(){
            this.store = useStore();
            this.localOptions = this.store.formOptions;
            this.title = this.store.formTitle;
            
        }
    }
</script>