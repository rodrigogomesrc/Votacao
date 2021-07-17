import VotingCard from '../components/VotingCard';

export default {
  title: 'VotingCard',
  component: VotingCard,
  props: {
    options: [],
    state: ""
  },
  argTypes: {
    options: {Control: "array"},
    state: {
      options: ['open', 'closed'],
      control: {type: 'radio'}
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VotingCard },
  template:
    '<voting-card :options="options" :state="state"/>',
});

export const votingCard1 = Template.bind({});
votingCard1.args = {
  options: [
    {text: "Sim", count: 3},
    {text: "Não", count: 8},
    {text: "Talvez", count: 12}
  ],
  state: "open"
};

