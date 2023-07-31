const user = { username: 'gndx', age: 32, country: 'CO' };
const { username, ...values } = user;
console.log(username);
console.log(values);