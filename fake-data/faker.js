const { faker } = require('@faker-js/faker');

const randomName = faker.name.fullName(); 
const randomLastName = faker.name.lastName();
const randomEmail = faker.internet.email(randomName,randomLastName); 

console.log('nombre: ',randomName, ', apellido: ', randomLastName, ', email: ',randomEmail);
