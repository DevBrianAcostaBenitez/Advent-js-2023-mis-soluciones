function findNaughtyStep(original, modified) {

  const [lessWords, mostWords] =
    [original, modified].sort((a, b) => a.length - b.length)

  return [...mostWords].find((x, i) => lessWords[i] != x) ?? "";
}

module.exports = findNaughtyStep
  
const original1 = 'abcd';
const modified1 = 'abcde';
console.log(findNaughtyStep(original1, modified1)); // Output: 'e'
  
const original2 = 'stepfor';
const modified2 = 'stepor';
console.log(findNaughtyStep(original2, modified2)); // Output: 'f'
  
const original3 = 'abcde';
const modified3 = 'abcde';
console.log(findNaughtyStep(original3, modified3)); // Output: ''
  