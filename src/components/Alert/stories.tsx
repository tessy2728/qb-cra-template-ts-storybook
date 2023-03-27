
import React from 'react';
import { ComponentStory, ComponentMeta, ComponentStoryObj } from '@storybook/react';
import * as AlertStories from './Alert.stories';
import Variants from './variants';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic UI/Alert',
    component: Variants,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof Variants>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Variants> = (args) => <Variants {...args} />;

export const All = Template.bind({});
All.args = {
    alertConfigs: [
        { message: AlertStories.Success?.args?.message, type: AlertStories.Success.args?.type },
        { message: AlertStories.Error?.args?.message, type: AlertStories.Error.args?.type },
        { message: AlertStories.Warning?.args?.message, type: AlertStories.Warning.args?.type },
        { message: AlertStories.Info?.args?.message, type: AlertStories.Info.args?.type }
    ],
};