<template>
    <div>
        <button v-for="option in options" :key="option.text" v-on:click="vote(option.text)">
            {{option.text}}
        </button>
    </div> 
</template>

<script>

    import useStore from '../store';

    export default {
        name: 'booth',
        data(){
            return {
                options: []
            }
        }, 
        methods: {
            vote(option){
                this.$emit("vote", option);
            },
            
        }, mounted(){
            const store = useStore();
            this.options = store.formOptions;
        }
    }
</script>
