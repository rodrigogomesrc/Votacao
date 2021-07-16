import VotingCard from '../components/VotingCard';

export default {
  title: 'VotingCard',
  component: VotingCard,
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

export const votingCard2 = Template.bind({});
votingCard2.args = {
    
};