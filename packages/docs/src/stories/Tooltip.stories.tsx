import type { StoryObj, Meta } from '@storybook/react';
import { Tooltip, TooltipProps } from '@guiathayde-ignite-ui/react';

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    message: '21 de Outubro - Indisponível',
  },
  argTypes: {
    children: { control: { type: null } },
    message: { control: { type: 'text' } },
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
