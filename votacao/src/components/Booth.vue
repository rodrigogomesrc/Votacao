<template>
    <div>
        <button v-for="option in options" :key="option.text" v-on:click="vote(option.text)">
            {{option.text}}
        </button>
    </div> 
</template>

<script>
    export default {
        name: 'booth',
        props: {
            options: []
        },
        methods: {
            vote(option){
                this.$emit("vote", option);
            }
        }
    }
</script>