type Color = ColorString | ColorRGB;
type ColorString = 'red' | 'blue' | 'yellow' | 'purple';
type ColorRGB = [red: number, green: number, blue: number];
type Theme = Record<string, Color>;

const theme = {
primary: 'red',
secondary: [10, 255, 1],
tertiary: 'purple',
} satisfies Theme;

const theme2 = {
    primary: 'red',
    secondary: [10, 255, 1],
    tertiary: 'purple',
} as Theme;

const _ensureTheme: Theme = theme;
const [r, g, b] = theme.secondary;