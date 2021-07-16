import Booth from '../components/Booth';

export default {
  title: 'Booth',
  component: Booth,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Booth },
  template:
    '<booth/>',
});

export const booth1 = Template.bind({});
booth1.args = {

};

export const booth2 = Template.bind({});
booth2.args = {
    
};