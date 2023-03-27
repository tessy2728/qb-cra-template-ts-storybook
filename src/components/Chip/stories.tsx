
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChipVariants from './variants';
import * as ChipStories from './Chip.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basic UI/Chip',
    component: ChipVariants,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof ChipVariants>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChipVariants> = (args) => <ChipVariants {...args} />;

export const All = Template.bind({});
All.args = {
    tags: [{
        bgColor: ChipStories.DeletedChip.args?.bgColor,
        color: ChipStories.DeletedChip.args?.color,
        value: ChipStories.DeletedChip.args?.value
    }, {
        bgColor: ChipStories.PlannedChip.args?.bgColor,
        color: ChipStories.PlannedChip.args?.color,
        value: ChipStories.PlannedChip.args?.value
    }, {
        bgColor: ChipStories.OverdueChip.args?.bgColor,
        color: ChipStories.OverdueChip.args?.color,
        value: ChipStories.OverdueChip.args?.value
    }, {
        bgColor: ChipStories.CompletedChip.args?.bgColor,
        color: ChipStories.CompletedChip.args?.color,
        value: ChipStories.CompletedChip.args?.value
    }
    ],
};