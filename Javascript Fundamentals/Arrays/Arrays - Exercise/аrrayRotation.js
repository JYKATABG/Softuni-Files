function arrayRotation(array, rotations) {
  while (rotations > 0) {
    let elementToMove = array.shift();
    array.push(elementToMove);
    rotations--;
  }
  console.log(array.join(" "));

  //for(let i = 1; i <= rotations;i++) {
  //    let elementToMove = array.shift()
  //    array.push(elementToMove);
  //    console.log(array);
  //  }
}
arrayRotation([2, 4, 15, 31], 5);
