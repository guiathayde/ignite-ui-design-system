import { Text } from '../Text';

import { TooltipContainer, TooltipContent, TooltipArrow } from './styles';

export interface TooltipProps {
  message: string;
}

export function Tooltip({ message }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipContent>
        <Text size="sm">{message}</Text>
      </TooltipContent>
      <TooltipArrow />
    </TooltipContainer>
  );
}

Tooltip.displayName = 'Tooltip';
