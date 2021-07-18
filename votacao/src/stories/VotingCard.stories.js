import React from 'react' ;
import VotingCard from '../Components/VotingCard';


export default {
    title: 'Voting',
    component: VotingCard,
    argTypes: {
        state: {
            options: ['open', 'closed'],
            control: {type: 'radio'}
        },
        title: "",
        options: []
    }
};

const Template = (args) => <VotingCard {...args}/>

export const card = Template.bind();
card.args = {
    state : "open",
    title: "Você concorda?",
    options : [
        {text: "Sim", count: 12}, 
        {text: "Talvez", count: 8}, 
        {text: "Não", count: 10}
      ]
}

export const card2 = Template.bind();
card2.args = {
    state : "closed",
    title: "Segue o relator?",
    options : [
        {text: "Sim", count: 12}, 
        {text: "Talvez", count: 8}, 
      ]
}

export const card3 = Template.bind();
card3.args = {
    state : "open",
    title: "Qual a melhor opção?",
    options: [
        {text: "Opção A", count: 12},
        {text: "Opção B", count: 4},
        {text: "Opção C", count: 5},
        {text: "Opção D", count: 7},
    ],
}