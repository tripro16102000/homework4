let phone1 = {
    name : `Xiaomi portable charger 20000mah`,
    brand : `Xiaomi`,
    price : 428,
    color :`White`,
    category : `Charger`
};

let phone2 = {
    name : `VSmart Active 1`,
    brand : `Vsmart`,
    price : 5487,
    color :`Black`,
    category : `Phone`
};

let phone3 = {
    name : `Iphone X`,
    brand : `Apple`,
    price : 21490,
    color :`Gray`,
    category : `Phone`
}

let phone4 = {
    name : `Samsung Galaxy A9`,
    brand : `Samsung`,
    price : 8490,
    color :`Blue`,
    category : `Phone`
};

let phone = [];
phone.push(phone1);
phone.push(phone2);
phone.push(phone3);
phone.push(phone4);

// //5.1
// for (let i = 0; i < phone.length; i++){
//     console.log(`Name: ${phone[i].name}`);
//     console.log(`Price: ${phone[i].price}`);
//     console.log(`------------------------`);
// }

//5.2
// let a = Number(prompt(`Enter product position`));
// a = a -1 
// for (let i = 0; i < phone.length ; i++){
//     if (i == a){
//         for (let x in phone[i]){
//             console.log(`${x}: ${phone[i][x]}`);
//         }
//     }
// }
//5.3

// let a = prompt(`Enter your category`);
// for (let i = 0; i < phone.length; i++){
//     if (a == phone[i].category){
//         console.log(`Name: ${phone[i].name}`);
//         console.log(`Price: ${phone[i].price}`);
//         console.log(`--------------`);
//     }
// }
//5.4

phone1.providers = ['Phukienzero Dientuccc']
phone2.providers = ['Tgdd Ddghn VhStore'];
phone3.providers = ['Tgdd'];
phone4.providers = ['Tgdd'];

for (let i = 0; i < phone.length; i++){
            console.log(`Name: ${phone[i].name}`);
            console.log(`Price: ${phone[i].price}`);
            console.log(`Providers: ${phone[i].providers}`);
            console.log(`------------------------`);
        }

