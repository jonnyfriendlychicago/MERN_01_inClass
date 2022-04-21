// // const beatles = ['Paul', 'George', 'Jerry', 'Ringo'];

// // function extractNames(data) {
// //     function actuallyPrintingNames() {
// //         for (let index = 0; index < data.length; index++) {
// //             const nameFromArray = data[index];
// //     console.log(nameFromArray + ' was found at index ' + index);
// //         }
// //     }
// //     actuallyPrintingNames();
// // }

// // extractNames(beatles);

// // console.log("Next------------------------------")

// // const person = { 
// //         firstName: 'Bob', 
// //         lastName: 'Marley', 
// //         email: 'bob@marley.com', 
// //         password: 'sekureP@ssw0rd9', 
// //         username: 'barley', 
// //         addresses: [
// //             {
// //                 address: '1600 Pennsylvania Avenue',
// //                 city: 'Washington, D.C.',
// //                 zipcode: '20500',
// //             },
// //             {
// //                 address: '221B Baker St.',
// //                 city: 'London',
// //                 zipcode: 'WC2N 5DU',
// //             }
// //         ],
// //         createdAt: 1543945177623
// //     };

// // const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// // const {email} = person; 
// // const [janni, dipjay, aniwater, flugmeyer, helpenguiste, stengenoodle] = animals; 
// // const {password} = person;

// // console.log(email)
// // console.log(stengenoodle)
// // console.log(password)

// // const hashedPassword = password
// // // person.password;

// // console.log(hashedPassword)

// // const {addresses} = person;

// // const {city} = addresses

// // console.log(addresses)
// // const [entry1, entry2] = addresses; 

// // console.log(entry1)

// // const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// // const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
// // // otherAnimals

// // console.log(otherAnimals)

// // const person = { 
// //         firstName: 'Bob', 
// //         lastName: 'Marley', 
// //         email: 'bob@marley.com', 
// //         password: 'sekureP@ssw0rd9', 
// //         username: 'barley', 
// //         addresses: [
// //             {
// //                 address: '1600 Pennsylvania Avenue',
// //                 city: 'Washington, D.C.',
// //                 zipcode: '20500',
// //             },
// //             {
// //                 address: '221B Baker St.',
// //                 city: 'London',
// //                 zipcode: 'WC2N 5DU',
// //             }
// //         ],
// //         createdAt: 1543945177623
// //     };

// // const { firstName, lastName, ...attributes } = person;
// // console.log(attributes)

// // const personCopy = { ...person };

// // console.log("personCopy:::")
// // console.log(personCopy)

// // const personCopy = { ...person };
// // personCopy === person
// // // => false
// // personCopy.addresses === person.addresses
// // // => true

// // console.log(personCopy)


// var sayHello = function(name) {
//     console.log('Hello ' + name);
//     };

// sayHello("Jonny");

// const sayHallo = (nameX) =>
//     {
//     console.log('Hello ' + nameX);
//     };

// sayHallo("Frankie"); 

// const sayYo = (nameZ) => console.log('Hello ' + nameZ); 

// sayYo("Billy")

// console.log("-------------------------------")

// // longhand notation to return an object
// // NOTE: first set of brackets are defining the function body
// // and the second set of brackets are to create the object literal
// const returnObjLonghand = () => {
//         return { 
//             firstName: 'John',
//             lastName: 'Wick'
//         }
//     }

// const returnForJon = () => 
//     console.log(returnObjLonghand())

// returnForJon(); 
//     /**
//       * The example below wouldn't work because the 
//       * brackets are interpreted as opening the body of the 
//       * function rather than brackets to create an object literal 
//       */

// //     const returnObj = () => { firstName: 'John', lastName: 'Wick' }
// //     // surrounding the implicit return with parenthesis solves the problem
// // const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

// console.log("-------------------------")

// class Deck {
//     constructor() {
//         const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//         const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//         const deck = [];
//             for (const suit of suits) {
//                 for (const face of faces) {
//                     deck.push(this.createCard(suit, face));
//                 }
//             }
//         this.deck = deck;
//     }
//     createCard(suit, face) {
//         return face + " of " + suit;
//     }
// }

// console.log(createCard()); 

// class Deck {
//     constructor() {
//         const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//         const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//         const deck = [];
//         suits.forEach(function(suit) {
//             faces.forEach(function(face) {
//                 deck.push(this.createCard(suit, face));
//             });
//         });
//     this.deck = deck;
//     }
//     createCard(suit, face) {
//         return face + " of " + suit;
//     }
// }

class Deck {
    constructor() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push(this.createCard(suit, face));
            });
        });
    this.deck = deck;
    }
    createCard(suit, face) {
    return face + " of " + suit;
    }
}

console.log(createCard); 
