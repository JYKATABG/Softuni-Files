function printElement(arr: string[], num: number) {
  const result : string[] = [];
  for (let i = 0; i < arr.length; i += num) {
    result.push(arr[i]);
  }

  return result;
}

console.log(printElement(["5", "20", "31", "4", "20"], 2));
