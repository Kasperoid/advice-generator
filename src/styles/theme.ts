type colorType = {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
};

type fontSizeType = {
  max: number;
  min: number;
};

type textType = {
  cardBody: fontSizeType;
};

type titleType = {
  cardTitle: fontSizeType;
};

type baseThemeType = {
  color: colorType;
  font: {
    text: textType;
    title: titleType;
  };
};

export const baseTheme: baseThemeType = {
  color: {
    primary: 'hsl(193, 38%, 86%)',
    secondary: 'hsl(150, 100%, 66%)',
    tertiary: 'hsl(218, 20%, 24%)',
    quaternary: 'rgb(31, 38, 50)',
  },
  font: {
    text: {
      cardBody: {
        max: 28,
        min: 15,
      },
    },
    title: {
      cardTitle: {
        max: 12,
        min: 8,
      },
    },
  },
};
