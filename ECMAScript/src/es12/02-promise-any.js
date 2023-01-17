const promise1 = new Promise((resolve, reject) => reject("Rejecsito"));
const promise2 = new Promise((resolve, reject) => resolve("Resolvesito"));
// Resolve y reject puede ser cualquier palabra
const promise3 = new Promise((sicas, nocas) => sicas("Rejecsito 3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));