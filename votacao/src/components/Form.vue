<template>
    <div>
        <div v-if="!isSubmited">
            <h3>Cadastre Título e Perguntas: </h3>
            <form id="optionsForm" v-on:submit.prevent="onSubmit($event)">
                
                <p>Título</p>
                <input class="formInput" type="text" id="title" name="title">

                <p>Perguntas</p>
                <input class="formInput" type="text" id="option1" name="option1">
                <input class="formInput" type="text" id="option2" name="option2">
                <button class="formInput" type="button" v-on:click="addOption">+</button>
                <button class="formInput" type="button" v-on:click="removeLastOption">Remover Último</button>
                <p class="error">{{errorMessage}}</p>
                <input class="formInput" type="submit" value="Cadastrar" id="btnsubmit">
            </form>
        </div>
        <voting-card v-if="isSubmited"/>
    </div>
    
    
</template>

<script>

    import VotingCard from '../components/VotingCard.vue';
    import useStore, {setOptions, setFormTitle} from '../store';

    export default {
        name: 'form',
        components: {
           VotingCard
        },
        data(){
            return {
                errorMessage: "",
                isSubmited: false,
                store: null,
                options: 2
            }
           
        },
        methods: {
            onSubmit(e){
                e.preventDefault();
                this.errorMessage = "";
                const formData = new FormData(e.target);
                let areErrors = false;
                let localOptions = [];
            
                for (let field of formData) {
                    const [key, value] = field;
                    const erro = this.checkErrors(value.toString());
                    if(erro){
                        areErrors = true;
                        setOptions([]);
                        break;
                    }
                    if(key==="title"){
                        setFormTitle(value);
                    }
                    else if(key.startsWith("option")){
                        let option = {text: value, count: 0}
                        localOptions.push(option);
                    }
                
                }
                if(!areErrors){
                    setOptions(localOptions);
                    this.isSubmited = true;
                }

            },
            addOption(){
                this.options++;
                let form = document.getElementById('optionsForm');
                let neOptionElement = document.createElement('input');
                neOptionElement.setAttribute("id", "option" + this.options.toString());
                neOptionElement.setAttribute("name", "option" + this.options.toString());
                neOptionElement.setAttribute("type", "text");
                neOptionElement.setAttribute("class", "formInput");
                form.insertBefore(neOptionElement, form.children[this.options + 2]);

            },
            removeLastOption(){
                if(this.options > 2){
                    let form = document.getElementById('optionsForm');
                    var toDelete = form.childNodes[this.options + 2];
                    toDelete.parentNode.removeChild( toDelete );
                    this.options--;
                }

            },
            checkErrors(field){
                 if(field.trim() === ''){
                    this.errorMessage="Campos não podem estar em branco!";
                    return true;
                } else if(field.length < 4){
                    this.errorMessage="Campos não podem ter menos do que 4 caracteres!";
                    return true;
                }
                return false;
            }

        },
        mounted(){
            this.store = useStore();
        }
    }


</script>

<style>
    form {
        display: flex;
        flex-direction: column
    }
    :global(.formInput) {
        height:20px;
        margin-bottom: 10px;
    }
    .error {
        color:red;
    }
</style>