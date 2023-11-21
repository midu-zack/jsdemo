function unionOfArrays(array1, array2) {

    let concatArray = array1.concat(array2);

    let union = [...new Set(concatArray)];

    console.log(union.sort());
  }
  
  
  let arr1 = [1, 3, 5, 7, 3, 5, 8];
  
  let arr2 = [2, 4, 6, 8, 4, 6, 1];

  unionOfArrays(arr1, arr2);