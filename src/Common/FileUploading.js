function FileToBase64(Myfiles) {
  return new Promise(function (resolve, reject) {
    let Url = "";
    let reader = new FileReader();
    reader.readAsDataURL(Myfiles);
    reader.onload = function () {
      Url = reader.result; //time
      resolve(Url); //compalsory to write resolve when we use promise
    };

    reader.onerror = function (error) {
      reject(error);
    }; //optional
  });

  // let Url = "";
  // let reader = new FileReader();
  // reader.readAsDataURL(Myfiles);
  // reader.onload = function () {
  //   Url = reader.result; //time
  //   console.log(Url);
  // };
  // return Url;
  // return "This is a Common Function to Convert File to Base64 String";
  //promise Method?

  // let res = await fetch("https://jsonplaceholder.typicode.com/todos/1"); //reslove or reject
  // // console.log(res);
  // then() // when promise is resolved
  // catch() // when promise is rejected

  //custom promise
  // let data = await res.json(); //resolve or reject// take time for response/result
  //  console.log(data);
}

function Myfun2() {
  return "this is Myfun2";
}
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let obj1 = {
  name: "Suresh",
  age: 10,
  city: "Rohtak",
};
export default FileToBase64;

export { obj1, a, Myfun2 };

//one default export is allowed in a file and we can import it with any name in other file
//export { Myfun2 }; // when we have a multy function or variable in a file and we want to export all of them we use this syntax
// export default
// module.exports //node js (backend)= FileToBase64; // when we have a multy function or variable in a
// module.exports = Myfun2; // when we have a multy function or variable in a
//  file and we want to export all of them we use this syntax
