// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { VotingCardComponent } from "../app/voting-card/voting-card.component";
import { ResultsComponent } from 'src/app/results/results.component';
import { BoothComponent } from 'src/app/booth/booth.component';

export default {
  title: 'VotingCard',
  component: VotingCardComponent,
  argTypes: {
    options: [],
    title: [],
    state: {
      options: ['open', 'closed'],
      control: {type: 'radio'}
  },
  },
  decorators: [
    moduleMetadata({
        declarations: [VotingCardComponent, BoothComponent, ResultsComponent]
    })
],
} as Meta;

const Template: Story<VotingCardComponent> = (args: VotingCardComponent) => ({
  props: args,
});

export const Voting1 = Template.bind({});
Voting1.args = {
  title: "Vocẽ concorda?",
  state: "open",
  options: [
    {text: "Sim", count: 3},
    {text: "Não", count: 8},
    {text: "Talvez", count: 12},
 ]

};

export const Voting2 = Template.bind({});
Voting2.args = {
  title: "Segue o relator?",
  state: "open",
  options: [
    {text: "Sim", count: 3},
    {text: "Não", count: 8},
 ]
};
