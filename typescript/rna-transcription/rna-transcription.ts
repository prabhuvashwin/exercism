const DNA_TO_RNA: { [key: string]: string } = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export function toRna(dna: string): string {
  const rna = new Array();
  dna.split('').forEach(ele => {
    if (!DNA_TO_RNA[ele]) {
      throw new Error('Invalid input DNA.');
    }
    rna.push(DNA_TO_RNA[ele])
  });
  return rna.join('');
}
