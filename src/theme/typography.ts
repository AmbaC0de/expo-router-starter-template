const FONT_SIZE = {
  h1: 32,
  h2: 26,
  h3: 22,
  h4: 18,
  subtitle: 16,
  body: 16,
  caption: 13,
  small: 11,
} as const;

export const TEXT_STYLE = {
  h1: {
    fontSize: FONT_SIZE.h1,
    fontWeight: "700",
    lineHeight: 40,
  },
  h2: {
    fontSize: FONT_SIZE.h2,
    fontWeight: "700",
    lineHeight: 34,
  },
  h3: {
    fontSize: FONT_SIZE.h3,
    fontWeight: "600",
    lineHeight: 28,
  },
  h4: {
    fontSize: FONT_SIZE.h4,
    fontWeight: "600",
    lineHeight: 24,
  },
  subtitle: {
    fontSize: FONT_SIZE.subtitle,
    fontWeight: "500",
    lineHeight: 22,
    opacity: 0.7,
  },
  body: {
    fontSize: FONT_SIZE.body,
    fontWeight: "400",
    lineHeight: 24,
  },
  caption: {
    fontSize: FONT_SIZE.caption,
    fontWeight: "400",
    lineHeight: 18,
  },
  small: {
    fontSize: FONT_SIZE.small,
    fontWeight: "400",
    lineHeight: 16,
  },
} as const;
