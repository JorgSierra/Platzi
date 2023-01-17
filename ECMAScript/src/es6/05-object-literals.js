// Object literals before
function newUser(user, age, country){
    return {
        user: user,
        age: age,
        country: country,
    }
}

// Object literals after
function newUser(user, age, country, uId){
    return {
        user, 
        age, 
        country,
        id: uId,  //ES5
    }
}
console.log(newUser("usuario", 34, "MX", 1));