//Asynchronous JavaScript

// Synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3"); //Jika proses memakan waktu yg lama maka akan terblock
// console.log("Proses 4");

//Asynchronous -> multi thread -> non blocking
//1. Parallel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 2");
// }, 2000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 4000);
// setTimeout(() => {
//   console.log("Proses 4");
// }, 1000);

//2. Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//         setTimeout(() => {
//           console.log("Proses 5");
//           setTimeout(() => {
//             console.log("Proses 6");
//           }, 5000);
//         }, 5000);
//       }, 5000);
//     }, 5000);
//   }, 5000);
// }, 5000);

//Promise
let condition = true;
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

//Cara menggunakan promise
//1. then - catch
// newPromise
//   .then((result) => `${result} !!!`) //Proses 1
//   .then((result2) => console.log(result2)) //Proses 2
//   .catch((error) => console.log(error));
// //2. Async/await
// Harus buat didalam fungsi

// const getPromise = async () => {
//   try {
//     const result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getPromise();

//Simulasi fetch data API dari JSONPlaceholder
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//Mini Exercise
//Ganti fetch then-catch menjadi async/await
//tampilkan field name saja
// const getDataJSON = async () => {
//   const response = await fetch("https://reqres.in/api/users", {
//     headers: {
//       Accept: "application/json",
//       "x-api-key": "reqres-free-v1",
//     },
//   });
//   const json = await response.json();
//   json.forEach(({ name }) => console.log(name));
// };

// getDataJSON();

(async () => {
  const result = await fetch("https://reqres.in/api/users?per_page=12", {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });
  const json = await result.json();

  console.log(json);
})();
