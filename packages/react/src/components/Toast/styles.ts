import { X } from 'phosphor-react';

import { styled } from '../../styles';

export const ToastyContainer = styled('div', {
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '$3 $5',
  gap: '$1',
  isolation: 'isolate',

  maxWidth: 360,

  position: 'relative',

  backgroundColor: '$gray800',
  border: '1px solid $colors$gray600',
  borderRadius: '$sm',
});

export const CloseButton = styled(X, {
  position: 'absolute',
  top: 16,
  right: 16,
  cursor: 'pointer',
  color: '$gray200',
});
