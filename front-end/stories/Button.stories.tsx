import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Button = () => {
	return <button>button</button>;
};

export default {
	title: 'button',
	component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button />;
