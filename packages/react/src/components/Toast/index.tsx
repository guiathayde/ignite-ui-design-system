import { Text } from '../Text';

import { ToastyContainer, CloseButton } from './styles';

export interface ToastyProps {
  title: string;
  description: string;
  onClose: () => void;
}

export function Toasty({ title, description, onClose }: ToastyProps) {
  return (
    <ToastyContainer>
      <CloseButton size={20} onClick={onClose} />
      <Text size="xl" css={{ color: '$white' }}>
        {title}
      </Text>
      <Text size="sm" css={{ color: '$gray200' }}>
        {description}
      </Text>
    </ToastyContainer>
  );
}

Toasty.displayName = 'Toasty';
