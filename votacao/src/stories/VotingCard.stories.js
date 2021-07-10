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
        title: ""
    }
};

const Template = (args) => <VotingCard {...args}/>

export const card = Template.bind();

card.args = {
    state : "open",
    title: "Você concorda?"
}