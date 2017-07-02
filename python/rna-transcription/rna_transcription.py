import re
def to_rna(dna):
    rna = dna
    for i in range (0,len(dna)):
        if dna[i] != 'G' and dna[i] != 'C' and dna[i] != 'A' and dna[i] != 'T':
            return ''
    rna = re.sub(r'G','L', rna);
    rna = re.sub(r'C','M',rna);
    rna = re.sub(r'A','N',rna);
    rna = re.sub(r'T','O',rna);
    rna = re.sub(r'L','C',rna);
    rna = re.sub(r'M','G',rna);
    rna = re.sub(r'N','U',rna);
    rna = re.sub(r'O','A',rna);
    return rna;
    pass