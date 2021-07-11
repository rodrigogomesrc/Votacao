// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { VotingCardComponent } from "../app/voting-card/voting-card.component";

export default {
  title: 'VotingCard',
  component: VotingCardComponent,
  argTypes: {
    
  },
} as Meta;

const Template: Story<VotingCardComponent> = (args: VotingCardComponent) => ({
  props: args,
});

export const Voting = Template.bind({});
Voting.args = {
  
};
