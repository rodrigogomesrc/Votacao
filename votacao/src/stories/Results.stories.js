import React from 'react' ;
import Results from '../Components/Results';


export default {
    title: 'Results',
    component: Results,
    argTypes: {
       
    }
};


const Template = (args) => <Results {...args}/>

export const results = Template.bind();

results.args = {
  
}