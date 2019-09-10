'use strict';

but.onclick = function() {

  //задание 1
  let arr = form.arr.value.match(/\d{1}/g);
  let newArr = [];
  let start = 0,
    lenght = 1,
    max_start = 0,
    max_lenght = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      lenght++;
    } else {
      if (lenght > max_lenght) {
        max_lenght = lenght;
        max_start = start;
        start = i + 1;
        lenght = 1;
      }
    }
  }
  for (let i = max_start; i < max_start + max_lenght; i++) {
    newArr.push(arr[i]);
  }
  console.log(newArr);



  // Задание 2
  // let arr = form.arr.value;
  // let str = "";
  // let array = [];
  // for (var i = 0; i < arr.length; i++) {
  //   array.push([]);
  //   for (var j = 0; j < arr.length; j++) {
  //     if (i == j) {
  //       array[i].push(arr[i]);
  //     }
  //     else {
  //       array[i].push("");
  //     }
  //   }
  //   str += array[i].join(" ") + "\n";
  // }
  // app.innerText = str;
  // console.log(str);

}
