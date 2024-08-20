// BONUS
// Welcome to the Array Manipulation and `forEach` Practice Exercise!
// In this exercise, you'll build arrays using the `push` method and interact with them using the `forEach` function.
// You'll be using factory functions to create objects and methods to manipulate those objects.

// EXPLANATION:
// The `forEach` function in JavaScript is used to iterate over each item in an array and execute a provided function on each element.
// Unlike `map`, `forEach` does not return a new array; it is typically used for side effects, like logging or modifying each element of the array.
// Understanding `forEach` is important as it provides a clear, functional way to perform operations on array elements without needing to manage a loop counter manually.

// TODO: First, familiarize yourself with the two factory functions provided below:

// Factory function to create a book
function createBook(title, author) {
  return {
      title,
      author,
      showDetails() {
          console.log(`"${this.title}" by ${this.author}`);
      }
  };
}

// Factory function to create a task
function createTask(description, dueDate) {
  return {
      description,
      dueDate,
      completed: false,
      completeTask() {
          this.completed = true;
          console.log(`Task "${this.description}" is now completed.`);
      }
  };
}

// Now, let's move on to the exercises!

// EXERCISE 1: Building a Book Collection
// INSTRUCTIONS: Create an empty array called `bookCollection`.
// Use the `push` method to add 3 books to the array using the `createBook` factory function.
// Then, use the `forEach` function to display the details of each book using the `showDetails` method.

// EXAMPLE:
console.log("\nExample 1:");
const exampleBookCollection = [];
exampleBookCollection.push(createBook('Pride and Prejudice', 'Jane Austen'));
exampleBookCollection.push(createBook('1984', 'George Orwell'));
exampleBookCollection.push(createBook('To Kill a Mockingbird', 'Harper Lee'));

exampleBookCollection.forEach(book => book.showDetails());

// TODO: Now, you try building your own book collection with different books!
const bookCollection = [];
bookCollection.push(createBook('Hocus Pocus', 'Kurt Vonnegut'));
bookCollection.push(createBook('Wayward Pines', 'Blake Crouch'));
bookCollection.push(createBook('It', 'Stephen King'));

console.log("\nExercise 1:");
bookCollection.forEach(book => book.showDetails());

// EXERCISE 2: Managing a Task List
// INSTRUCTIONS: Create an empty array called `taskList`.
// Use the `push` method to add 3 tasks to the array using the `createTask` factory function.
// Then, use the `forEach` function to mark each task as completed using the `completeTask` method.

// EXAMPLE:
console.log("\nExample 2:");
const exampleTaskList = [];
exampleTaskList.push(createTask('Write a report', '2024-08-30'));
exampleTaskList.push(createTask('Grocery shopping', '2024-08-31'));
exampleTaskList.push(createTask('Call the bank', '2024-09-01'));

exampleTaskList.forEach(task => task.completeTask());

// TODO: Now, you try building your own task list and marking each task as completed!
console.log("\nExercise 2:");
const taskList = [];
taskList.push(createTask("Take out the garbage", '2024-08-19'));
taskList.push(createTask("Grocery Shopping", '2024-08-22'));
taskList.push(createTask("Open House", '2024-08-21'));

taskList.forEach(task => task.completeTask());
// EXERCISE 3: Updating Book Titles
// INSTRUCTIONS: Create an empty array called `library`.
// Use the `push` method to add 3 books to the array using the `createBook` factory function.
// Then, use the `forEach` function to update the title of each book by adding " - Second Edition" to the end of the title.

// EXAMPLE:
console.log("\nExample 3:");
const exampleLibrary = [];
exampleLibrary.push(createBook('The Great Gatsby', 'F. Scott Fitzgerald'));
exampleLibrary.push(createBook('Brave New World', 'Aldous Huxley'));
exampleLibrary.push(createBook('Moby Dick', 'Herman Melville'));

exampleLibrary.forEach(book => {
  book.title += ' - Second Edition';
  book.showDetails(); // Showing the updated title
});

// TODO: Now, you try updating the titles of your own library!
console.log("\nExercise 3:");
const library = [];
library.push(createBook('Of Mice and Men', 'John Steinbeck'));
library.push(createBook('Frankenstein', 'Mary Shelley'));
library.push(createBook('Lord of the Flies', 'William Golding'));

library.forEach(book => {
  book.title += ' - Second Edition';
  book.showDetails();
});

// EXERCISE 4: Rescheduling Tasks
// INSTRUCTIONS: Create an empty array called `taskList`.
// Use the `push` method to add 3 tasks to the array using the `createTask` factory function.
// Then, use the `forEach` function to reschedule each task by changing its due date to one day later.

// EXAMPLE:
console.log("\nExample 4:");
const exampleTaskList2 = [];
exampleTaskList2.push(createTask('Finish project', '2024-09-10'));
exampleTaskList2.push(createTask('Visit the dentist', '2024-09-11'));
exampleTaskList2.push(createTask('Submit assignment', '2024-09-12'));

exampleTaskList2.forEach(task => {
  let oldDate = new Date(task.dueDate);
  let newDate = new Date(oldDate.setDate(oldDate.getDate() + 1));
  task.dueDate = newDate.toISOString().split('T')[0];
  console.log(`New due date for "${task.description}": ${task.dueDate}`);
});

// TODO: Now, you try rescheduling your own tasks!
console.log("\nExercise 4:");
const taskList2 = [];
taskList2.push(createTask('Submit Reading Assignment', '2024-08-20'));
taskList2.push(createTask('Give dogs a bath', '2024-08-21'));
taskList2.push(createTask('Wash dishes', '2024-08-19'));

taskList2.forEach(task => {
  let oldDate = new Date(task.dueDate);
  let newDate = new Date(oldDate.setDate(oldDate.getDate() + 1));
  task.dueDate = newDate.toISOString().split('T')[0]; //.split() @ timezone, [0] cut of time. This is so the date will only show the date in ios format w/out timezone and 00:00:00
  console.log(`New Due Date for "${task.description}": ${task.dueDate}`);
});

// EXERCISE 5: Counting Completed Tasks
// INSTRUCTIONS: Create an empty array called `taskList`.
// Use the `push` method to add 3 tasks to the array using the `createTask` factory function.
// Use the `forEach` function to mark only 2 tasks as completed. Then, use another `forEach` function to count how many tasks have been completed.

// EXAMPLE:
console.log("\nExample 5:");
const exampleTaskList3 = [];
exampleTaskList3.push(createTask('Clean the house', '2024-09-15'));
exampleTaskList3.push(createTask('Pay electricity bill', '2024-09-16'));
exampleTaskList3.push(createTask('Prepare presentation', '2024-09-17'));

exampleTaskList3[0].completeTask(); // Mark first task as completed
exampleTaskList3[2].completeTask(); // Mark third task as completed

let completedCount = 0;
exampleTaskList3.forEach(task => {
  if (task.completed) {
      completedCount++;
  }
});
console.log(`Number of completed tasks: ${completedCount}`);

// TODO: Now, you try counting the completed tasks in your own task list!
console.log("\nExercise 5:");
const taskList3 = [];
taskList3.push(createTask('Clean Bedroom', '2024-08-19'));
taskList3.push(createTask('Clean Hamster Cage', '2024-08-23'));
taskList3.push(createTask('Clean Litter Box', '2024-08-25'));

taskList3[0].completeTask();
taskList3[2].completeTask();

let completedCount2 = 0;
taskList3.forEach(task => {
  if(task.completed) {
    completedCount2++;
  }
});
console.log(`Number of completed tasks: ${completedCount2}`);

// Great job! You've completed the exercises.
// Feel free to experiment further with the factory functions and the `forEach` function to create more complex arrays and interactions.
