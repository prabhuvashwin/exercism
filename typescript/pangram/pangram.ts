export function isPangram(sentence: string): boolean {
  const seen: { [key: string]: boolean } = {};

  sentence.toLowerCase().split('').forEach((character: string): void => {
    if (/[a-z]/g.test(character) && !seen[character]) {
      seen[character] = true;
    }
  });

  return Object.keys(seen).length === 26;
}
