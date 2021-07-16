import Results from '../components/Results';

export default {
  title: 'Results',
  component: Results,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Results },
  template:
    '<results/>',
});

export const results1 = Template.bind({});
results1.args = {

};

export const results2 = Template.bind({});
results2.args = {
    
};