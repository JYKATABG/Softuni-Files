function print(wordsInput: string[], delimeter: string) {
  const output = wordsInput.join(delimeter);
  return output
}
console.log(print(["How about no?", "I", "will", "not", "do", "it!"], "_"));
