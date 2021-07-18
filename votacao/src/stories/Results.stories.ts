// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ResultsComponent } from '../app/results/results.component';

export default {
  title: 'Results',
  component: ResultsComponent,
  argTypes: {
    options: []
  },
} as Meta;

const Template: Story<ResultsComponent> = (args: ResultsComponent) => ({
  props: args,
});

export const Results1 = Template.bind({});
Results1.args = {
  options: [
      {text: "Sim", count: 3},
      {text: "Não", count: 8},
      {text: "Talvez", count: 12}
   ],
};

export const Results2 = Template.bind({});
Results2.args = {
  options: [
      {text: "Sim", count: 3},
      {text: "Não", count: 8},
   ],
};

