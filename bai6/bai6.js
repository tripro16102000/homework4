let a1 = {
    name: 'HTML',
    complete: false,
};
let a2 = {
    name: 'CSS',
    complete: false,
};
let a3 = {
    name: 'Basics of javascript',
    complete: false,
};
let a4 = {
    name: 'Node package manager (Npm)',
    complete: false,
};
let a5 = {
    name: 'Git',
    complete: false,
};
let a = [];
a.push(a1);
a.push(a2);
a.push(a3);
a.push(a4);
a.push(a5);

//6.1
for (let i = 0; i < a.length; i++){
    console.log(`${i+1}. ${a[i].name}`);
    console.log(`Complete: ${a[i].complete}`);
   
}

//6.2

let userInput = prompt('Enter your command(new, delete, update, complete)');
// if (userInput == 'new'){
//     let a6 = {};
//     let b = prompt('Enter new task');
//     a6.name == b;
//     a6.complete = false;
//     a.push(a6);
// }
// for (let i = 0; i < a.length; i++){
//     console.log(`${i+1}. ${a[i].name}`);
//     console.log(`Complete: ${a[i].complete}`);
   
// }

//6.3

// if (userInput == 'update'){
//     let b = Number(prompt('Enter position'));
//      b = b - 1;
//     let c = prompt('Enter new title');
//      for (let i = 0; i < a.length; i++){
//         if (i == b){
//             a[i].name = c;
//         }
//     }
// }
// for (let i = 0; i < a.length; i++){
//         console.log(`${i+1}. ${a[i].name}`);
//         console.log(`Complete: ${a[i].complete}`);
// }

//6.4

// if (userInput == 'complete'){
//     let b = Number(prompt('Enter position'));
//     b = b - 1;
//     for (let i = 0; i < a.length; i++){
//         if (i == b){
//             a[i].complete = true;
//         }
//     }
// }
// for (let i = 0; i < a.length; i++){
//             console.log(`${i+1}. ${a[i].name}`);
//             console.log(`Complete: ${a[i].complete}`);
// }

//6.5

if (userInput == 'delete'){
    let b = Number(prompt('Enter position you want to delete'));
    b = b - 1;
    for (let i = 0; i < a.length; i++){
        if (i == b){
            a.splice(i, 1);
        }
    }
}
for (let i = 0; i < a.length; i++){
        console.log(`${i+1}. ${a[i].name}`);
        console.log(`Complete: ${a[i].complete}`);
}