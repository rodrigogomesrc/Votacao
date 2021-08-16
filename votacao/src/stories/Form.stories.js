import React from 'react' ;
import Form from '../Components/Form';

export default {
    title: 'Form',
    component: Form,
    argTypes: {
      
    }
};


const Template = (args) => <Form {...args}/>

export const form1 = Template.bind();
form1.args = {
 
}
