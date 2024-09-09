const person = {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 30,
    location: {
        country: 'USA',
        city: 'New York'
    }
};

const {firstName, lastName, age, location: {country, city}} = person;

console.log(firstName);
console.log(city);

const newarr = {...person};

console.log(newarr);