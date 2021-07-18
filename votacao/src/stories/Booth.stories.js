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
    '<booth :options="options"/>',
});

export const booth1 = Template.bind({});
booth1.args = {
  options: [
    {text: "Sim", count: 3},
    {text: "Não", count: 8},
    {text: "Talvez", count: 12}
  ]
};

export const booth2 = Template.bind({});
booth2.args = {
  options: [
    {text: "Sim", count: 3},
    {text: "Não", count: 8},
    {text: "Talvez", count: 12}
  ]
};

export const booth3 = Template.bind({});
booth3.args = {
  options: [
    {text: "Opção A", count: 12},
    {text: "Opção B", count: 4},
    {text: "Opção C", count: 5},
    {text: "Opção D", count: 7},
  ]
};




