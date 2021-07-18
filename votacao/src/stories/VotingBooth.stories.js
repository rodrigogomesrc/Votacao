import React from 'react' ;
import VotingBooth from '../Components/VotingBooth';

export default {
    title: 'Booth',
    component: VotingBooth,
    argTypes: {
       options: [],
       vote: ""
    }
};

const Template = (args) => <VotingBooth {...args}/>


export const booth1 = Template.bind();
booth1.args = {
    options : [
        {text: "Sim", count: 12}, 
        {text: "Talvez", count: 8}, 
        {text: "Não", count: 10}
    ],
    vote: () => {}
}

export const booth2 = Template.bind();
booth2.args = {
    options : [
        {text: "Sim", count: 12}, 
        {text: "Talvez", count: 8}, 
    ],
    vote: () => {}
}

export const booth3 = Template.bind();
booth3.args = {
    options: [
        {text: "Opção A", count: 12},
        {text: "Opção B", count: 4},
        {text: "Opção C", count: 5},
        {text: "Opção D", count: 7},
    ],
    vote: () => {}
}

