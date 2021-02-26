export function interpolate(
  literals: TemplateStringsArray,
  ...expressions: (string | number | undefined)[]
) {
  let string = ``;
  for (const [i, val] of expressions.entries()) {
    string += literals[i] + (val || "");
  }
  string += literals[literals.length - 1];
  return string;
}
