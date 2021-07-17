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

