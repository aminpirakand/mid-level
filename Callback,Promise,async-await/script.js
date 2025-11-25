// callback function
function greet(name,callback){
    console.log(`hello ${name}`)
    callback()
}

function sayGoodBy(){
    console.log(`good by!`)
}

greet('amin',sayGoodBy)

//promise

let promise = new Promise((res,rej)=>{
    let success = true;
    if(success){
        res(`operation was successfull`)
    }else{
        rej(`operation faild!`)
    }
});

promise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

// async/await

async function fetchData() {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let data = await response.json();
        console.log(data)
    } catch(error){
        console.log('Error:', error)
    }
}
fetchData()

async function fetchData2() {
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        let data =await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
    
}
fetchData2()

// 3 task with promise

function task1(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log('Task 1 completed');
            resolve();
        },1000);
    });
}

function task2(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log('Task 2 completed')
            resolve()
        },1000);
    });
}

function task3(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log('Task 3 completed')
            resolve()
        },1000);
    });
}
async function executedTasks() {
    await task1();
    await task2();
    await task3();
}
executedTasks()

// all tasks concurrently
async function executedTasksConcurrently() {
    await Promise.all([task1(),task2(),task3()]);
    
}
executedTasksConcurrently()