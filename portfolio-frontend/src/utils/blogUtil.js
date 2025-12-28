export const splitToPoints = (content) => {
  if (!content) return [];

  return content
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0);
};
