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


export const results2 = Template.bind({});
results2.args = {
   options: [
        {text: "Sim", count: 3},
        {text: "Não", count: 8},
    ]
};

export const results3 = Template.bind({});
results3.args = {
   options: [
      {text: "Opção A", count: 12},
      {text: "Opção B", count: 4},
      {text: "Opção C", count: 5},
      {text: "Opção D", count: 7},
    ]
};