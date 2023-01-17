const users = {
    gndx: {
        country : 'MX'
    },
    ana : {
        country: 'CO'
    }
}

console.log(users.gndx.country);

// Esto seria un error ya que no existe
// console.log(users.bebeloper.country);

// Validacion por optional chaining
console.log(users?.bebeloper?.country);