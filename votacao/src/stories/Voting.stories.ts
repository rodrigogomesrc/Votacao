// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { VotingCardComponent } from "../app/voting-card/voting-card.component";
import { ResultsComponent } from 'src/app/results/results.component';
import { BoothComponent } from 'src/app/booth/booth.component';
import { FormsModule } from '@angular/forms';

export default {
  title: 'VotingCard',
  component: VotingCardComponent,
  decorators: [
    moduleMetadata({
        declarations: [ResultsComponent, BoothComponent],
        imports:[FormsModule]
    })
  ],
  argTypes: {
    options: [],
    title: [],
    state: {
      options: ['open', 'closed'],
      control: {type: 'radio'}
  },
  },
} as Meta;

const Template: Story<VotingCardComponent> = (args: VotingCardComponent) => ({
  props: args,
});

export const Voting1 = Template.bind({});
Voting1.args = {
  
};

export const Voting2 = Template.bind({});
Voting2.args = {
  
};
