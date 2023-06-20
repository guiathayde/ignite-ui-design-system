import { styled } from '../../styles';

export const TooltipContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 0,

  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  position: 'relative',
});

export const TooltipContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '$3 $4',
  gap: '$2',

  backgroundColor: '$gray900',
  borderRadius: '$sm',
});

export const TooltipArrow = styled('div', {
  width: 0,
  height: 0,
  borderLeft: '15px solid transparent',
  borderRight: '15px solid transparent',
  borderTop: '15px solid $colors$gray900',
  fontSize: 0,
  lineHeight: 0,

  position: 'absolute',
  margin: '0 auto',
  left: 0,
  right: 0,
  bottom: -7,
});
