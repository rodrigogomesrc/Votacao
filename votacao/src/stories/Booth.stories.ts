// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BoothComponent } from '../app/booth/booth.component';

export default {
  title: 'Booth',
  component: BoothComponent,
  argTypes: {
    
  },
} as Meta;

const Template: Story<BoothComponent> = (args: BoothComponent) => ({
  props: args,
});

export const Booth = Template.bind({});
Booth.args = {
  
};
