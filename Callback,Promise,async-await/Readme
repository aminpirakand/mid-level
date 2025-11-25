JavaScript Callbacks, Promises, and Async/Await Example

This repository contains a collection of examples demonstrating the usage of callbacks, promises, and async/await in JavaScript. These concepts are fundamental to handling asynchronous operations in JavaScript.

###Callbacks

A callback is a function that is passed as an argument to another function. The passed function (callback) is then executed once the operation completes.

Example: Callback Function

function greet(name,callback){
    console.log(`hello ${name}`)
    callback()
}

function sayGoodBy(){
    console.log(`goodby!`)
}

greet('amin',sayGoodBy)

Explanation:

greet function takes two arguments: name and callback.

After logging the greeting message, it calls the callback() function.

In this case, sayGoodBy is passed as a callback and executed after greet.

#################################################################################################
####Promises

A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise has three states:

Pending - The initial state of the promise.

Resolved (Fulfilled) - The operation completed successfully.

Rejected - The operation failed.

Example: Promise with then and catch

let promise = new Promise((res, rej) => {
    let success = true;
    if (success) {
        res('Operation was successful');
    } else {
        rej('Operation failed!');
    }
});

promise
    .then(result => {
        console.log(result);  // If the promise is resolved
    })
    .catch(error => {
        console.log(error);  // If the promise is rejected
    });
Explanation:

The promise is created with a condition (success variable) to resolve or reject.

The .then() method is used to handle the successful outcome of the promise.

The .catch() method is used to handle the error if the promise is rejected.

########################################################################################################
###Async/Await

async and await are syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code.

async functions always return a promise.

await can only be used inside async functions and pauses the function execution until the promise is resolved or rejected.

Example: Fetch Data with async/await

async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchData();

Explanation:

The fetchData function is marked as async, meaning it returns a promise.

Inside the function, await is used to pause the function execution until the fetch() API resolves with the data.

###Another Example with async/await:

async function fetchData2() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData2();

###Executing Multiple Tasks Sequentially

In some cases, we need to execute multiple asynchronous tasks one after another, waiting for one to complete before starting the next.

Example: Sequential Task Execution

function task1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Task 1 completed');
            resolve();
        }, 1000);
    });
}

function task2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Task 2 completed');
            resolve();
        }, 1000);
    });
}

function task3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Task 3 completed');
            resolve();
        }, 1000);
    });
}

async function executedTasks() {
    await task1();
    await task2();
    await task3();
}

executedTasks();

Explanation:

The executedTasks function is asynchronous and uses await to ensure tasks run sequentially.

Each task is a promise that resolves after a setTimeout.

###Executing Multiple Tasks Concurrently

Sometimes we need to execute multiple asynchronous tasks at the same time. This can be done using Promise.all() which waits for all promises to resolve or any of them to reject.

Example: Concurrent Task Execution

async function executedTasksConcurrently() {
    await Promise.all([task1(), task2(), task3()]);
}

executedTasksConcurrently();

Explanation:

Promise.all() is used to execute all tasks at once.

It waits for all promises to resolve before continuing.

###Summary

This repository demonstrates the three key approaches to handling asynchronous operations in JavaScript:

Callbacks - Passing functions as arguments and calling them when the operation completes.

Promises - Representing the completion of an operation and chaining methods for success and failure.

Async/Await - A modern syntax that makes asynchronous code appear synchronous, allowing more readable code.

These techniques are essential when working with APIs, databases, or any other form of asynchronous operation in JavaScript.

###How to Run the Examples

Copy the code into your JavaScript file or an online editor like JSFiddle or CodePen.

Open the browser console to view the output of each example.

Experiment with modifying the success conditions or responses to observe different behaviors.