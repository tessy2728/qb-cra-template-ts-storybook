import React from 'react';
import { ComponentStory, ComponentMeta, ComponentStoryObj } from '@storybook/react';

import Alert from '..';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Basic UI/Alert',
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;


export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  type: 'success',
  message: 'Article created successfully.'
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'Oops! Something went wrong.'
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'We do not ship to PO Box.'
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  message: 'This item has an year of service warranty.'
};

