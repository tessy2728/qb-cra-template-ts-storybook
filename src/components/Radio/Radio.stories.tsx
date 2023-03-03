import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic UI/Radio',
    component: Radio,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Checked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checked.args = {
    id: "light",
    label: "Light",
    className: "radio switch-field",
    name: "theme",
    value: "light",
    isSelected: true
};

export const Unchecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchecked.args = {
    id: "dark",
    label: "Light",
    className: "radio switch-field",
    name: "theme",
    value: "light",
    isSelected: false
};