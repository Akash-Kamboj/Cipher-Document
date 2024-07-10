// let person = {
//     firstName: 'Rohan',
//     lastName: 'Raj',
//     age: 30,
//     city: 'New York',

//     getFullName: function() {
//         return `The name of the person is ${person.firstName} ${person.lastName}`;
//     },

//     phNumber:
//     {
//         home: '1234567890',
//         office: '9876543210',
//     },
// };

// console.log(person.getFullName());

// console.log(person.phNumber.home);

// function person(firstName, lastName)
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// let person1 = new person("Ram", "Singh");
// let person2 = new person("Ajay","Nagr");

// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);

// ----------------------------------------------------------------

// const coder = {
//     isStudying: false,
//     printIntroduction: function()
//     {
//         console.log(`Hi, my name is ${this.name}. Am I studying?: ${this.isStudying}.`);
//     },
// };

// const me = Object.create(coder);

// me.name = "John Doe";
// me.isStudying = true;
// me.printIntroduction();

// ----------------------------------------------------------------

// class Vehicle
// {
//     constructor(name, model, year)
//     {
//         this.name = name;
//         this.model = model;
//         this.year = year;
//     }
//     getDetails()
//     {
//         return `The name of the vehicle is ${this.name}`;
//     }
// }

// let v1 = new Vehicle("Audi","Q5",2023);
// let v2 = new Vehicle("Maruti","800",2005);

// console.log(v1.name);
// console.log(v1.model);
// console.log(v1.year);

// console.log(v1.getDetails());

// -------------------------------------------------------------------------------------------------------------------------------

// function Vehicle(name, model, year)
// {
//     this.name = name;
//     this.model = model;
//     this.year = year;
// }
// Vehicle.prototype.getDetails = function()
// {
//     return `The Name  of the Vehicle is ${this.name}`;

// };
// let v1 = new Vehicle("Audi","Q5",2023);
// let v2 = new Vehicle("Maruti","800",2005);

// console.log(v1.name);
// console.log(v1.model);
// console.log(v1.year);
// console.log(v1.getDetails());

// ------------------------------------------------------------------------------------------------

// class person
// {
//     constructor(name , id)
//     {
//         this.name = name;
//         this.id = id;
//     }

//     addAddress(newAddress)
//     {
//         this.address = newAddress;
//     }

//     getDetails()
//     {
//         console.log(`Name is: ${this.name}, and address is: ${this.address}` );
//     }
// }

// let p1 = new person("John Doe", 123);

// p1.addAddress("123 Main St");

// p1.getDetails();

// -------------------------------------------------------------------------------------------------------------------------------

// class person 
// {
//     constructor(Fname, Lname)
//     {
//         this.Fname = Fname;
//         this.Lname = Lname;

//         let getDetails_NoAccess = function ()
//         {
//             return `First Name is: ${this.Fname} and Last Name is: ${this.Lname}`;

//         }
//     }
// }
// let p1 = new person("Akash", "Kamboj");

// console.log(p1.Fname);
// console.log(p1.getDetails_NoAccess());
// console.log(p1.getDetails_Access());

// -------------------------------------------------------------------------------------------------------------------------------

class person
{
    constructor(Fname, Lname)
    {
        this.Fname = Fname;
        this.Lname = Lname;
    }

    getDetals = function ()
    {
        return `First Name is: ${this.Fname} and Last Name is: ${this.Lname}`;
    };
}

class student extends person
{
    constructor(Fname, Lname, RollNo)
    {
        super(Fname, Lname);
        this.RollNo = RollNo;
    }

    getDetals = function ()
    {
        return ` First Name is: ${this.Fname} and Last Name is: ${this.Lname } and Roll Number is: ${this.RollNo}`;
    };
}

let p1 = new person("Akash", "Kamboj");

console.log(p1.Fanme);
console.log(p1.getDetals());

let student1 = new student("Rohan", "Kumar", 30);
console.log(student1.getDetals());
