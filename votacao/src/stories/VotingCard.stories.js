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
    title: ""
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VotingCard },
  template:
    '<voting-card :options="options" :state="state" :title="title"/>',
});

export const votingCard1 = Template.bind({});
votingCard1.args = {
  options: [
    {text: "Sim", count: 3},
    {text: "Não", count: 8},
    {text: "Talvez", count: 12}
  ],
  state: "open",
  title: "Você concorda?"
};


export const votingCard2 = Template.bind({});
votingCard2.args = {
  options: [
    {text: "Sim", count: 3},
    {text: "Não", count: 8},
  ],
  state: "closed",
  title: "Segue o relator?"
};

export const votingCard3 = Template.bind({});
votingCard3.args = {
  options: [
    {text: "Opção A", count: 12},
    {text: "Opção B", count: 4},
    {text: "Opção C", count: 5},
    {text: "Opção D", count: 7},
  ],
  state: "open",
  title: "Qual é a melhor opção?"
};


