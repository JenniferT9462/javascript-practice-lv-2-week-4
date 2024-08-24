// BONUS
// INSTRUCTIONS: In this exercise, you'll practice using the `reduce` method to aggregate information from objects within an array.
// The arrays will be provided for you. Your task is to write the code to aggregate information from these arrays using `reduce` and log it to the console.

// EXPLANATION: 
// The `reduce` method is a powerful tool in JavaScript used to aggregate values from an array into a single output. 
// It takes a callback function that is executed on each element of the array and accumulates the result into a single value, which is returned after the final iteration.
// The `reduce` method is not only useful for summing numbers but also for building complex data structures, transforming arrays, and more. 
// `Map` and `Reduce` are fundamental concepts in functional programming and are vital in processing and transforming collections of data efficiently.

// EXAMPLE 1: Aggregating Book Titles using `reduce`
const exampleBooks = [];
exampleBooks.push({ title: 'The Hobbit', author: 'J.R.R. Tolkien' });
exampleBooks.push({ title: '1984', author: 'George Orwell' });
exampleBooks.push({ title: 'Moby Dick', author: 'Herman Melville' });

// the callback for reduce takes 2 arguments: the result of the previous call, and the next item of the array.
// It returns the new acc to pass to the next iteration.
function aggregateBooks(acc, book) {//the accumulator
  return  acc + book.title + ', '
}

// reduce take two arguments: a function and the starting value for acc.
const bookTitles = exampleBooks.reduce(aggregateBooks, '');
console.log('Book Titles:', bookTitles);

// EXAMPLE 2: Aggregating Country Names using `reduce`
const exampleCountries = [];
exampleCountries.push({ name: 'Japan', population: 126476461 });
exampleCountries.push({ name: 'Brazil', population: 212559417 });
exampleCountries.push({ name: 'Germany', population: 83783942 });

// the callback is often defined as an arrow function for convenience and pass directly to reduce.
const countryNames = exampleCountries.reduce((acc, country, index) => {
    // Note: you may add an optional comma using the ? : ternary operator
    return acc + country.name + (index < exampleCountries.length - 1 ? ', ' : '');
}, '');
console.log('Country Names:', countryNames);

// EXERCISE 1: Aggregating First Names
// INSTRUCTIONS: Use the `reduce` method to aggregate all the `firstName` values into a single string, separated by commas.
// BONUS: suppress the comma on the last item
// Log the resulting string to the console.

const people = [];
people.push({ firstName: 'John', lastName: 'Doe' });
people.push({ firstName: 'Jane', lastName: 'Smith' });
people.push({ firstName: 'Emily', lastName: 'Johnson' });

// TODO: Write your code here to aggregate the first names from the `people` array using `reduce`.
function aggregatePeople(acc, person, index) {
  return acc + person.firstName + (index < people.length - 1 ? ', ' : '');
}
const firstNames = people.reduce(aggregatePeople, '');
console.log('First Names: ', firstNames);
// EXERCISE 2: Aggregating Last Names
// INSTRUCTIONS: Use the `reduce` method to aggregate all the `lastName` values into a single string, separated by commas.
// Log the resulting string to the console.

const employees = [];
employees.push({ firstName: 'Alice', lastName: 'Brown' });
employees.push({ firstName: 'Bob', lastName: 'White' });
employees.push({ firstName: 'Charlie', lastName: 'Green' });

// TODO: Write your code here to aggregate the last names from the `employees` array using `reduce`.
function aggregateEmployees(acc, person, index) {
  return acc + person.lastName + (index < people.length - 1 ? ', ' : '');
}
const lastNames = employees.reduce(aggregateEmployees, '');
console.log('Last Names: ', lastNames);
// EXERCISE 3: Aggregating Product Names
// INSTRUCTIONS: Use the `reduce` method to aggregate all the `productName` values into a single string, separated by commas.
// Log the resulting string to the console.

const products = [];
products.push({ productName: 'Laptop', price: 1000 });
products.push({ productName: 'Smartphone', price: 800 });
products.push({ productName: 'Tablet', price: 600 });

// TODO: Write your code here to aggregate the product names from the `products` array using `reduce`.
function aggregateProducts(acc, product, index) {
  return acc + product.productName + (index < products.length - 1 ? ', ' : '');
}
const productNames = products.reduce(aggregateProducts, '');
console.log('Product Names: ', productNames);

// EXERCISE 4: Aggregating Task Descriptions
// INSTRUCTIONS: Use the `reduce` method to aggregate all the `description` values into a single string, separated by commas.
// Log the resulting string to the console.

const tasks = [];
tasks.push({ description: 'Complete assignment', dueDate: '2024-08-20' });
tasks.push({ description: 'Attend meeting', dueDate: '2024-08-21' });
tasks.push({ description: 'Submit report', dueDate: '2024-08-22' });

// TODO: Write your code here to aggregate the task descriptions from the `tasks` array using `reduce`.
function aggregateTasks(acc, task, index) {
  return acc + task.description + (index < tasks.length - 1 ? ', ' : '');
}
const descriptions = tasks.reduce(aggregateTasks, '');
console.log('Descriptions: ', descriptions);
// EXERCISE 5: Aggregating Animal Sounds
// INSTRUCTIONS: Use the `reduce` method to aggregate all the `sound` values into a single string, separated by commas.
// Log the resulting string to the console.

const exampleAnimals = [];
exampleAnimals.push({ species: 'Dog', sound: 'Bark' });
exampleAnimals.push({ species: 'Cat', sound: 'Meow' });
exampleAnimals.push({ species: 'Cow', sound: 'Moo' });

// TODO: Write your code here to aggregate the animal sounds from the `exampleAnimals` array using `reduce`.
function aggregateAnimals(acc, animal, index) {
  return acc + animal.sound + (index < exampleAnimals.length - 1 ? ', ' : '');
}
const animalSounds = exampleAnimals.reduce(aggregateAnimals, '');
console.log('Animals Sounds: ', animalSounds);
// INSTRUCTIONS: Great job! You've completed the exercises.
// These exercises should have helped you practice using the `reduce` method to aggregate information from objects in arrays.
// Continue to experiment by creating more arrays and aggregating different types of information using `reduce`.