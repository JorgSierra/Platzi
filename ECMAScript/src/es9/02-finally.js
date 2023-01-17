// La promesa es algo que va a suceder, ¿Cúando?
// Hoy, mañana o nunca!

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true){
            // Send respose to then
            resolve('Hey');
        }
        else{
            // Send respose to catch
            reject('Ups');
        }
    })
}

anotherFunction()
    .then(res => console.log("Then " + res))
    .catch(err => console.log("Catch " + err))
    // It's run a the end every time
    .finally(() => console.log("Finnaly ended"));