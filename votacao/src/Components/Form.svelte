<script>

    import { formOptions } from '../stores/formData';

    let form;
    let options = 2;
    let errorMessage = "";

    function onSubmit(e) {
        errorMessage = "";
        const formData = new FormData(e.target);
        //let allOptions = [];
        let title;
      
        for (let field of formData) {
            const [key, value] = field;
            checkErrors(value.toString());
            if(key==="title"){
                title = value;
            }
            else if(key.startsWith("option")){
                let option = {text: value, count: 0}
                formOptions.update(currentOptions => {
                    return [option, ...currentOptions];
                })
                //allOptions.push(option);
            }
        }
    }

    function addOption(){
        options++;
        let neOptionElement = document.createElement('input');
        neOptionElement.setAttribute("id", "option" + options.toString());
        neOptionElement.setAttribute("name", "option" + options.toString());
        neOptionElement.setAttribute("type", "text");
        neOptionElement.setAttribute("class", "formInput");
        form.insertBefore(neOptionElement, form.children[options + 2]);
    }

    function checkErrors(field){

        if(field.trim() === ''){
            errorMessage="Campos não podem estar em branco!";

        } else if(field.length < 4){
            errorMessage="Campos não podem ter menos do que 4 caracteres!";
        }
    }

   
    function removeLastOption(){
        if(options > 2){
            var toDelete = form.childNodes[options + 4];
            toDelete.parentNode.removeChild( toDelete );
            options--;
        }
    }

</script>

<div>
    <h3>Cadastre Título e Perguntas: </h3>
    <form on:submit|preventDefault={onSubmit} bind:this={form} id="optionsForm" >
        
        <p>Título</p>
        <input class="formInput" type="text" id="title" name="title">

        <p>Perguntas</p>
        <input class="formInput" type="text" id="option1" name="option1">
        <input class="formInput" type="text" id="option2" name="option2">
        <button class="formInput" type="button" on:click={addOption}>+</button>
        <button class="formInput" type="button" on:click={removeLastOption}>Remover Último</button>
        <p class="error">{errorMessage}</p>
        <input class="formInput" type="submit" value="Submit" id="btnsubmit">
    </form>
</div>

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