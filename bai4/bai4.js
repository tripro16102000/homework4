//4.1
let dictionary = {
    debug : `The process of figuring out why your program has a certain error and how to fix it`,
    done : `When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)`,
    defect : `The formal word for ‘error’`,
    pm : `The short version of Project Manager, the person in charge of the final result of a project`,
    uiux : `UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels`,
}
user = prompt(`Hi there, this is dev dictionary`);
if (user == `debug`){
    alert(dictionary.debug)
}else if(user == `done`){
    alert(dictionary.done)
}else if(user == `defect`){
    alert(dictionary.defect)
}else if(user == `pm`){
    alert(dictionary.pm)
}else if(user == `uiux`){
    alert(dictionary.uiux)
}else{
    alert(`We could not find your word : ${user} `)
}
//4.2
user = prompt(`Hi there, this is dev dictionary`);
if (user == `debug`){
    alert(dictionary.debug)
}else if(user == `done`){
    alert(dictionary.done)
}else if(user == `defect`){
    alert(dictionary.defect)
}else if(user == `pm`){
    alert(dictionary.pm)
}else if(user == `uiux`){
    alert(dictionary.uiux)
}else{
    let a = prompt(`we could not find your word : ${user} , please leaves your explaination`);
    dictionary[user]= a
    let b = prompt(`Enter a keyword`);
    alert(`${b} 
     ${dictionary[b]}`)
}
