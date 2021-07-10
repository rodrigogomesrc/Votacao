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


export const booth = Template.bind();

booth.args = {
    options : [
        {text: "Sim", count: 12}, 
        {text: "Talvez", count: 8}, 
        {text: "Não", count: 10}
    ],
    vote: () => {}
}

