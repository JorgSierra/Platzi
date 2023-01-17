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
    .then(res => console.log(res))
    .catch(err => console.log(err));