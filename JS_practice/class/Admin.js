class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    
}


class Admin extends User {
    constructor(name, age, isAdmin) {
        super(name, age);  
        this.isAdmin = isAdmin;
    }
}

const Zhantik = new User('Zhantore', 20);
const Bakhredin = new Admin('Bakhredin', 22, true);

console.log(Zhantik);
console.log(Bakhredin);
