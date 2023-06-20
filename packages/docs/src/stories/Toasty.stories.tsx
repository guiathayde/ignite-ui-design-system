import type { StoryObj, Meta } from '@storybook/react';
import { Toasty, ToastyProps } from '@guiathayde-ignite-ui/react';

export default {
  title: 'Surfaces/Toasty',
  component: Toasty,
  tags: ['autodocs'],
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    children: { control: { type: null } },
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
} as Meta<ToastyProps>;

export const Primary: StoryObj<ToastyProps> = {};
