import React from 'react' ;
import Results from '../Components/Results';

export default {
    title: 'Results',
    component: Results,
    argTypes: {
       options: []
    }
};

const Template = (args) => <Results {...args}/>

export const results = Template.bind();

results.args = {
  options : [
      {text: "Sim", count: 12}, 
      {text: "Talvez", count: 8}, 
      {text: "Não", count: 10}
    ]
}