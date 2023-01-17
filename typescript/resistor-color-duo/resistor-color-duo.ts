const COLORS: { [key: string]: number } = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};

export function decodedValue(colors: string[]): number {
  if (colors.length <= 1) return -1;

  let result = 0;
  result = COLORS[colors[0]] * 10;
  result += COLORS[colors[1]];

  return result;
}
