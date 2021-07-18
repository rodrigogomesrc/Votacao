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

export const results1 = Template.bind();
results1.args = {
  options : [
      {text: "Sim", count: 12}, 
      {text: "Talvez", count: 8}, 
      {text: "Não", count: 10}
    ]
}

export const results2 = Template.bind();
results2.args = {
  options : [
      {text: "Sim", count: 12}, 
      {text: "Talvez", count: 8}, 
    
    ]
}

export const results3 = Template.bind();
results3.args = {
  options: [
    {text: "Opção A", count: 12},
    {text: "Opção B", count: 4},
    {text: "Opção C", count: 5},
    {text: "Opção D", count: 7},
  ],
}