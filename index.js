

function generateRandomNumber(min = 1, max = 50) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomName() {
    return faker.name.findName();
}

function Person() {

    this.name = generateRandomName()
    this.age = generateRandomNumber()


    this.interval = setInterval(() => {
        this.age++;
    }, 1000);

}

let personsArray = [...Array(4)].map(() => new Person());

function cleanUpArray() {
    personsArray = personsArray.filter(person => {
        if (person.age >= 40) {
            clearInterval(person.interval); 
            return false;
        }
        return true;
    });
}

function addNewPersons() {
    personsArray.push(new Person())
}

setInterval(() => {
    cleanUpArray();
    console.log(personsArray); 
}, 1000);


setInterval(addNewPersons, 2000);
