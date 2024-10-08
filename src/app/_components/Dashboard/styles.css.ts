import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

export const root = style({
  ...theme.layouts.columnCenterX,
  height: `calc(100dvh - ${theme.sizes.appHeaderHeight})`,
  zIndex: 0,
});

export const background = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100dvh',
  opacity: 0.7,
});

globalStyle(`${background} > img`, {
  objectFit: 'cover',
});

export const backgroundGradient = style({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: rem(156),
  background: `linear-gradient(180deg, transparent, ${theme.colors.black})`,
});

export const branding = style({
  marginTop: rem(24),
  color: theme.colors.white,
  fontFamily: 'var(--font-jetbrains)',
  fontSize: rem(28),
  fontWeight: 600,
  lineHeight: '100%',
  textAlign: 'center',

  ...breakpoint({
    mobile: { marginTop: rem(36), fontSize: rem(32) },
    tablet: { marginTop: rem(48), fontSize: rem(38) },
  }),
});

export const time = style({
  marginTop: rem(20),
  color: theme.colors.white,
  fontFamily: 'var(--font-jetbrains)',
  fontSize: rem(16),
  fontWeight: 500,
  lineHeight: '100%',
  textAlign: 'center',

  ...breakpoint({
    mobile: { fontSize: rem(18) },
    tablet: { fontSize: rem(20) },
  }),
});

export const registerLink = style({
  width: 'fit-content',
  paddingBlock: rem(13),
  paddingInline: rem(32),
  marginTop: rem(38),
  marginInline: 'auto',
  color: theme.colors.white,
  fontFamily: 'var(--font-jetbrains)',
  fontSize: rem(14),
  fontWeight: 500,
  lineHeight: '100%',
  textAlign: 'center',
  border: `${rem(2)} solid ${theme.colors.white}`,
  borderRadius: rem(36),
  transition: 'color 0.3s, border-color 0.3s, background-color 0.3s',

  ':hover': {
    color: 'rgba(255, 255, 255, 0.8)',
    borderColor: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export const ci = style({
  width: rem(300),
  height: rem(300),
  marginTop: rem(48),
  marginInline: 'auto',
});

globalStyle(`${ci} > div`, {
  touchAction: 'auto !important',
});
