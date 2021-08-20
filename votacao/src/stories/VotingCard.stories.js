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
    '<voting-card/>',
});

export const votingCard1 = Template.bind({});
votingCard1.args = {
 
};