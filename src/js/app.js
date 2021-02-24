export default function superPhonePurification(number) {
  const regReplaceEights = /^8\s*/;
  const regClear = /\D|\s/g;
  return `+${number.replace(regReplaceEights, '7').replace(regClear, '')}`;
}
