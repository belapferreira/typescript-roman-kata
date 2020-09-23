export function removeRomanNumeralWritingErrors(roman: string): string {
  const invalidRoman = /[^ivxlcdm]/gi;

  const invalidIRoman = /(i){4,}/gi;
  const invalidXRoman = /(x){4,}/gi;
  const invalidCRoman = /(c){4,}/gi;
  const invalidMRoman = /(m){4,}/gi;

  const invalidVRoman = /(v)+/gi;
  const invalidLRoman = /(l)+/gi;
  const invalidDRoman = /(d)+/gi;

  let text = roman.replace(invalidRoman, "").toUpperCase();
  text = text.replace(invalidIRoman, "III");
  text = text.replace(invalidXRoman, "XXX");
  text = text.replace(invalidCRoman, "CCC");
  text = text.replace(invalidMRoman, "MMM");

  text = text.replace(invalidVRoman, "V");
  text = text.replace(invalidLRoman, "L");
  text = text.replace(invalidDRoman, "D");

  return text;
}
