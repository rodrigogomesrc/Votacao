import Results from '../components/Results';

export default {
  title: 'Results',
  component: Results,
  props: {
    options: []
  },
  argTypes: {
    options: {Control: "array"}
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Results },
  template:
    '<results :options="options"/>',
});

export const results1 = Template.bind({});
results1.args = {
   options: [
        {text: "Sim", count: 3},
        {text: "Não", count: 8},
        {text: "Talvez", count: 12}
    ]
};