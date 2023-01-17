function newUser(name, age, country){
    var name = name || 'Jorge';
    var age = age || 28;
    var country = country || 'CO';
    console.log(name, age, country);
}

newUser();
newUser('Oscar', 15, 'MX');

// New implementation

function newAdmin(name = 'Jorge', age = 29, country = 'CL'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 30, 'PE');