// BONUS
// Welcome to the Array Manipulation and `map` Practice Exercise!
// In this exercise, you'll build arrays using the `push` method and transform them using the `map` function.
// You'll be using factory functions to create objects and methods to manipulate and transform those objects.

// EXPLANATION:
// The `map` function in JavaScript creates a new array populated with the results of calling a provided function on every element in the calling array.
// `map` is essential in functional programming because it allows you to transform data in a clean, declarative way without mutating (or changing) the original array.

// TODO: First, familiarize yourself with the two factory functions provided below:

// Factory function to create a product
function createProduct(name, price) {
  return {
      name,
      price,
      applyDiscount(discount) {
          this.price -= this.price * discount;
          return this; // Return the updated product object
      }
  };
}

// Factory function to create a student
function createStudent(name, grade) {
  return {
      name,
      grade,
      improveGrade(extraPoints) {
          this.grade += extraPoints;
          return this; // Return the updated student object
      }
  };
}

// Now, let's move on to the exercises!

// EXERCISE 1: Applying Discounts to Products
// INSTRUCTIONS: Create an empty array called `products`.
// Use the `push` method to add 3 products to the array using the `createProduct` factory function.
// Then, use the `map` function to create a new array of products with a 10% discount applied to each product's price.

// EXAMPLE:
const exampleProducts = [];
exampleProducts.push(createProduct('Laptop', 1000));
exampleProducts.push(createProduct('Smartphone', 800));
exampleProducts.push(createProduct('Tablet', 600));

const discountedProducts = exampleProducts.map(product => product.applyDiscount(0.1));
console.log('Discounted Products:', discountedProducts);

// TODO: Now, you try applying discounts to your own list of products!
const myProducts = [];
myProducts.push(createProduct('Gaming PC', 1200));
myProducts.push(createProduct('PS5', 499));
myProducts.push(createProduct('Piano', 1600));
myProducts.push(createProduct('TV', 350));

const myProductsDiscounts = myProducts.map(product => product.applyDiscount(.25));
console.log('Discounted Products: ', myProductsDiscounts);

// EXERCISE 2: Improving Student Grades
// INSTRUCTIONS: Create an empty array called `students`.
// Use the `push` method to add 3 students to the array using the `createStudent` factory function.
// Then, use the `map` function to create a new array of students with their grades improved by 5 points.

// EXAMPLE:
const exampleStudents = [];
exampleStudents.push(createStudent('Alice', 85));
exampleStudents.push(createStudent('Bob', 78));
exampleStudents.push(createStudent('Charlie', 92));

const improvedStudents = exampleStudents.map(student => student.improveGrade(5));
console.log('Improved Students:', improvedStudents);

// TODO: Now, you try improving the grades of your own students!
const myStudents = [];
myStudents.push(createStudent('Anna', 95));
myStudents.push(createStudent('Nicolas', 86));
myStudents.push(createStudent('Frank', 78));
myStudents.push(createStudent('Sam', 82));

const improvedGrades = myStudents.map(student => student.improveGrade(4));
console.log('Improved Grade: ', improvedGrades);

// EXERCISE 3: Formatting Product Names
// INSTRUCTIONS: Create an empty array called `products`.
// Use the `push` method to add 3 products to the array using the `createProduct` factory function.
// Then, use the `map` function to create a new array of product names formatted in uppercase.

// EXAMPLE:
const exampleProducts2 = [];
exampleProducts2.push(createProduct('Laptop', 1000));
exampleProducts2.push(createProduct('Smartphone', 800));
exampleProducts2.push(createProduct('Tablet', 600));

const productNamesUpperCase = exampleProducts2.map(product => product.name.toUpperCase());
console.log('Product Names in Uppercase:', productNamesUpperCase);

// TODO: Now, you try formatting the names of your own products!
const myProducts2 = [];
myProducts2.push(createProduct('Digital Camera', 340));
myProducts2.push(createProduct('Refrigerator', 1200));
myProducts2.push(createProduct('Dish Washer', 845));

const productsNamesUpperCase = myProducts2.map(product => product.name.toUpperCase());
console.log('Product Names in Uppercase:', productsNamesUpperCase);


// EXERCISE 4: Adjusting Student Grades
// INSTRUCTIONS: Create an empty array called `students`.
// Use the `push` method to add 3 students to the array using the `createStudent` factory function.
// Then, use the `map` function to create a new array of grades adjusted by subtracting 2 points from each student's grade.

// EXAMPLE:
const exampleStudents2 = [];
exampleStudents2.push(createStudent('Alice', 85));
exampleStudents2.push(createStudent('Bob', 78));
exampleStudents2.push(createStudent('Charlie', 92));

const adjustedGrades = exampleStudents2.map(student => {
  student.grade -= 2;
  return student.grade;
});
console.log('Adjusted Grades:', adjustedGrades);

// TODO: Now, you try adjusting the grades of your own students!
const myStudents2 = [];
myStudents2.push(createStudent('Jerry', 78));
myStudents2.push(createStudent('Bob', 80));
myStudents2.push(createStudent('Pam', 79));

const adjustedGrades2 = myStudents2.map(student => {
  student.grade -= 4;
  return student.grade;
});
console.log('Adjusted Grades: ', adjustedGrades2);

// EXERCISE 5: Mapping Task Descriptions to Uppercase
// INSTRUCTIONS: Create an empty array called `tasks`.
// Use the `push` method to add 3 tasks to the array with descriptions as strings.
// Then, use the `map` function to create a new array where each task description is converted to uppercase.

// EXAMPLE:
const exampleTasks = [];
exampleTasks.push({ description: 'Write a report', dueDate: '2024-08-30' });
exampleTasks.push({ description: 'Grocery shopping', dueDate: '2024-08-31' });
exampleTasks.push({ description: 'Call the bank', dueDate: '2024-09-01' });

const uppercaseDescriptions = exampleTasks.map(task => task.description.toUpperCase());
console.log('Uppercase Task Descriptions:', uppercaseDescriptions);

// TODO: Now, you try converting the descriptions of your own tasks to uppercase!
const tasks = [];
tasks.push({ description: 'Write a todo list', dueDate: '2024-08-24'});
tasks.push({ description: 'Pick up medicine', dueDate: '2024-08-23'});
tasks.push({ description: 'Build a Fort', dueDate: '2024-08-24'});

const uppercaseDescriptions2 = tasks.map(task => task.description.toUpperCase());
console.log('Uppercase Task Descriptions: ', uppercaseDescriptions2);

// Great job! You've completed the exercises.
// The `map` function is a powerful tool in JavaScript, allowing you to transform data in a clean and efficient way.
// Feel free to experiment further with `map` and other array methods to create more complex data transformations.

// A note on `map`
// The `map` function is important in computer science because it provides a clean, 
//declarative way to transform data within arrays without mutating the original data.
// By applying a function to each element of an array and returning a new array with the transformed elements,
// `map` promotes immutability and functional programming principles. This leads to more readable, maintainable,
// and predictable code, making it a fundamental tool for working with collections of data.