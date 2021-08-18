// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { FormComponent } from 'src/app/form/form.component';
import { VotingCardComponent } from 'src/app/voting-card/voting-card.component';
import { ResultsComponent } from 'src/app/results/results.component';
import { BoothComponent } from 'src/app/booth/booth.component';

export default {
  title: 'Form',
  component: FormComponent,
  decorators: [
    moduleMetadata({
        declarations: [VotingCardComponent, ResultsComponent, BoothComponent],
        imports:[FormsModule]
    })
  ],
  argTypes: {
   
  },
} as Meta;

const Template: Story<FormComponent> = (args: FormComponent) => ({
  props: args,
});

export const Form1 = Template.bind({});
Form1.args = {
 
};
