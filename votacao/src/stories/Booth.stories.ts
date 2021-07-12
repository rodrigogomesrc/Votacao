// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BoothComponent } from '../app/booth/booth.component';

export default {
  title: 'Booth',
  component: BoothComponent,
  argTypes: {
    options: []
  },
} as Meta;

const Template: Story<BoothComponent> = (args: BoothComponent) => ({
  props: args,
});

export const Booth1 = Template.bind({});
Booth1.args = {
    options: [
        {text: "Sim", count: 3},
        {text: "Não", count: 8},
        {text: "Talvez", count: 12}
     ],
};

