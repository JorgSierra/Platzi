try{
    hello();
}
catch (error){
    console.log('Entra en el catch');
    console.log(error);
}

try{
    anotherFn();
}
catch {
    console.log('Esto es un error');
}