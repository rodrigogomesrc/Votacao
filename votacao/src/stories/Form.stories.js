import Form from '../components/Form';

export default {
  title: 'Form',
  component: Form,
 
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Form },
 
  template:
    '<Form/>',
});

export const form1 = Template.bind({});
form1.args = {
 
};