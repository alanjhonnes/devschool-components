import { Meta, Story } from '@storybook/angular';
import { SharedModule } from '../../../shared.module';
import { ParentComponent } from './parent.component';

export default {
  title: 'ParentComponent',
  component: ParentComponent,
} as Meta<ParentComponent>;

const Template: Story<ParentComponent> = (args: ParentComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [SharedModule],
  },
});

export const Basic = Template.bind({});
Basic.args = {};
