import React, { useState, useEffect } from 'react';
import "./index.css";
import { VotingContext } from '../../Contexts/votingContext';
import VotingCard  from '../VotingCard';

const Form = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmited, setIsSubmitted] = useState(false);
    const [formOptions, setFormOptions] = useState([{text: "Sim", count: 12}, 
    {text: "Talvez", count: 8}, 
    {text: "Não", count: 10}]);
    const [formTitle, setFormTitle] = useState("");
    const [votingStatus, setVotingStatus] = useState("open");
    const [optionsQtd, setOptionsQtd] = useState(2);

    const renderForm = () => {
        return (
            <div>
                <form onSubmit={handleSubmit} id="questionsForm">
                    <p>Título</p>
                    <input className="formInput" type="text" id="title" name="title"/>
                    <p>Perguntas</p>
                    <input className="formInput" type="text" id="option1" name="option1"/>
                    <input className="formInput" type="text" id="option2" name="option2"/>
                    <button className="formInput" type="button" onClick={()=> addOption()} >+</button>
                    <button className="formInput" type="button" onClick={()=> removeLastOption()}>Remover Último</button>
                    <p className="error">{errorMessage}</p>
                    <input className="formInput" type="submit" value="Cadastrar" id="btnsubmit"/>
                </form>
            </div>
        )
    }
    
    const renderVotingCard = () => {
        return (
            <VotingCard></VotingCard>
        )
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let areErrors = false;
        let localOptions = [];
    
        for (let field of formData) {
            const [key, value] = field;
            const erro = checkErrors(value.toString());
            if(erro){
                areErrors = true;
                setFormOptions([]);
                break;
            }
            if(key==="title"){
                setFormTitle(value);
            }
            else if(key.startsWith("option")){
                let option = {text: value, count: 0};
                localOptions.push(option);
            }
        }

        if(!areErrors){
            setIsSubmitted(true);
        }

        setFormOptions(localOptions);
    }
    
    const addOption = () => {
        setOptionsQtd(optionsQtd + 1);
        let form = document.getElementById("questionsForm");
        let neOptionElement = document.createElement('input');
        neOptionElement.setAttribute("id", "option" + (optionsQtd+1).toString());
        neOptionElement.setAttribute("name", "option" + (optionsQtd+1).toString());
        neOptionElement.setAttribute("type", "text");
        neOptionElement.setAttribute("class", "formInput");
        form.insertBefore(neOptionElement, form.children[optionsQtd + 3]);
    }
    const removeLastOption = () => {
        if(optionsQtd > 2){
            let lastOption = document.getElementById("option" + optionsQtd.toString());
            lastOption.remove();
            setOptionsQtd(optionsQtd-1);
        }
    }

    const checkErrors = (field) => {
        if(field.trim() === ''){
            setErrorMessage("Campos não podem estar em branco!")
            return true;
        } else if(field.length < 4){
            setErrorMessage("Campos não podem ter menos do que 4 caracteres!")
            return true;
        }
        return false;
    }

    const render = () => {
        if(isSubmited){
            return(
                renderVotingCard()
            )
        } else {
            return(
                renderForm()
            )
        }
    }

    return (
        <VotingContext.Provider 
            value={{formOptions, setFormOptions, formTitle, setFormTitle, votingStatus, setVotingStatus}}
        >
            {
                render()
            }
        </VotingContext.Provider>
    )
}



export default Form
