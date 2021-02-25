export function interpolate<T>(
  literals: TemplateStringsArray,
  ...expressions: T[]
) {
  let string = ``;
  for (const [i, val] of expressions.entries()) {
    string += literals[i] + val;
  }
  string += literals[literals.length - 1];
  return string;
}
