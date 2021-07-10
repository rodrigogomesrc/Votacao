import React from 'react' ;
import VotingBooth from '../Components/VotingBooth';


export default {
    title: 'Booth',
    component: VotingBooth,
    argTypes: {
       
    }
};


const Template = (args) => <VotingBooth {...args}/>

export const booth = Template.bind();

booth.args = {
  
}