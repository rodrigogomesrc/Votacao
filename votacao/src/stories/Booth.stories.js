import Booth from '../components/Booth';

export default {
  title: 'Booth',
  component: Booth,
  props: {
    options: []
  },
  argTypes: {
    options: {Control: "array"}
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Booth },
  template:
    '<booth />',
});

export const booth1 = Template.bind({});
booth1.args = {
 
};
